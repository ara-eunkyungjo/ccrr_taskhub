


jsPsych.plugins['draw-circles-experiment'] = (function(){

  var plugin = {};

  plugin.info = {
    name: 'draw-circles-experiment',
    parameters: {
    }
  }

  plugin.trial = function(display_element, trial){
     
    
      var canvas = this.__canvas = new fabric.Canvas('c', {
    isDrawingMode: true
  });

      
      
      
    
      html = '<div '+
      'id="jspsych-free-sort-arena" '+
      'class="c" '+
      'style="position: relative; up: 0%; left: 50%;transform: translateX(-50%);align: center;width:'+800+'px; height:'+800+'px; border:2px solid #444;"'+
      '></div>'
      
      function Add() {
    var rect = new fabric.Rect({
      left: 100,
      top: 50,
      fill: 'yellow',
      width: 200,
      height: 100,
      objectCaching: false,
      stroke: 'lightgreen',
      strokeWidth: 4,
    });

    canvas.add(rect);
    canvas.setActiveObject(rect);
  }

display_element.innerHTML = html ;
      
      
      
    jsPsych.finishTrial();
  }

  return plugin;

})();



