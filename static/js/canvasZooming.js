var element;
var canvasElements = document.getElementById('canvas').children;
for (var i = 0; i < canvasElements.length; i++){
  if(canvasElements[i].tagName == 'svg'){
    element = '#' + canvasElements[i].id;
  }
}

console.log(element);
var panZoom = svgPanZoom(element, {
         zoomEnabled: true,
         controlIconsEnabled: false
       });
       document.getElementById('zoom-in').addEventListener('click', function(ev){
         ev.preventDefault()
         panZoom.zoomIn()
       });
       document.getElementById('zoom-out').addEventListener('click', function(ev){
         ev.preventDefault()
         panZoom.zoomOut()
       });
       document.getElementById('reset').addEventListener('click', function(ev){
         ev.preventDefault()
         panZoom.resetZoom()
       });
