//TODO: alert needs to be variable in order for the language to work 


jsPsych.plugins['konva-draw-circle'] = (function(){

  var plugin = {};

  plugin.info = {
    name: 'konva-draw-circle',
    parameters: {
        
        canvas_width: {
            
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sort area width',
        default: .8*window.innerWidth, //550,
        description: 'The height of the container that subjects can move the stimuli in.'
            
        },
        canvas_height:{
        
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sort area height',
        default: .8*window.innerHeight, //550,
        description: 'The height of the container that subjects can move the stimuli in.'
  
        },
        prompt:{
        
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Provide a reminder about the action the subject is supposed to take.'
        
        },
        button_label:{
            
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'The text that appears on the button to continue to the next trial.'
            
        }
        
    }
  }

  plugin.trial = function(display_element, trial){
      
    var start_time = performance.now()
    var html = ""
    if (trial.prompt !== null){
        html += trial.prompt
    }
      
    html += '<select id="tool">' + 
      '<option value="brush">Brush</option>' + 
      '<option value="eraser">Eraser</option>'+
    '</select>'  
    
    html += '<body>' + 
        
    '<div id="stage-parent">'+
        
    '<div id="container1"></div>'+
        
    '<div id="menu">'+
    '<div>' + 
    '<button id="delete-button">Delete</button>'+
    '</div>'+
    '</div>'
      
    display_element.innerHTML = html
      
      
    display_element.innerHTML += '<p><button id="jspsych-draw-circles-done-btn" class="jspsych-btn">'+trial.button_label+'</button></p>';
      
// set up stage
      
    var stage = new Konva.Stage({container: 'container1', width: trial.canvas_width, height: trial.canvas_height});
    var layer = new Konva.Layer({draggable: false});
    stage.add(layer);
      
      
      var layer = new Konva.Layer();
      stage.add(layer);

      var isPaint = false;
      var mode = 'brush';
      var lastLine;

      stage.on('mousedown touchstart', function (e) {
        isPaint = true;
        var pos = stage.getPointerPosition();
        lastLine = new Konva.Line({
          stroke: '#df4b26',
          strokeWidth: 5,
          globalCompositeOperation:
            mode === 'brush' ? 'source-over' : 'destination-out',
          points: [pos.x, pos.y],
        });
        layer.add(lastLine);
          console.log(lastLine)

      });

      stage.on('mouseup touchend', function () {
        isPaint = false;
      });

      // and core function - drawing
      stage.on('mousemove touchmove', function () {
        if (!isPaint) {
          return;
        }

        const pos = stage.getPointerPosition();
        var newPoints = lastLine.points().concat([pos.x, pos.y]);
        lastLine.points(newPoints);
        layer.batchDraw();
      });

      var select = document.getElementById('tool');
      select.addEventListener('change', function () {
        mode = select.value;
      })
    
    var r1 = new Konva.Rect({x: 0, y: 0, width: trial.canvas_width, height: trial.canvas_height, fill: 'white'})    
    layer.add(r1)
      

      

    stage.draw() // First draw of canvas.
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

display_element.querySelector('#jspsych-draw-circles-done-btn').addEventListener('click', function(){

   
            
    
            
     

      var trial_data = {
        //"locations": JSON.stringify(locations),
        //"rt": rt,
        //"labels": labels.map(function(x){return x.attrs.text})
        
      };
        
      display_element.innerHTML = '';
      jsPsych.finishTrial(trial_data);

    
    
      // advance to next part
      
    });

  }

  return plugin;

})();