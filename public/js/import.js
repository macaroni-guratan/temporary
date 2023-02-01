function importJS() {
  if (!new Array().push) return false;
  var scripts = new Array(
    '../js/list.js',
    '../js/set.js',
    '../js/edit.js',
    '../js/class.js',
    '../js/search.js',
    '../js/preview.js'
  );
  for (var i = 0; i < scripts.length; i++) {
    document.write('<script type="text/javascript" src="' + scripts[i] + '"></script>');
  }
}
importJS();