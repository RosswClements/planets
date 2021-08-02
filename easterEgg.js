function onDune(cb) {
    var input = '';
    var key = '68857869';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) {
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  
  onDune(function () {window.location.href = "arrakis.html";})