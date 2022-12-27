window.open = function() {};
 window.print = function() {};
 if (false) {
   window.ontouchstart = function() {};
 }
if(document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage('resize', "*");
}