function preview(){
  const div = document.getElementById("makeArea");
  require('fs').writeFileSync('../preview.html' + tmpClass, div, 'utf-8');
  window.open('../preview.html', '_blank');
}