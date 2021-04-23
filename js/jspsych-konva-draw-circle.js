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
      '<option value="circle">Circle</option>' + 
      '<option value="line">Line</option>' +
        '<option value="label">Label</option>' + 
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
      
      
    //var layer = new Konva.Layer();
    //stage.add(layer);
      
    
    var r1 = new Konva.Rect({x: 0, y: 0, width: trial.canvas_width, height: trial.canvas_height, fill: 'white', stroke: "black"})    
    layer.add(r1)  
      
     //filler circle: 
    var r_filler = new Konva.Circle({x: 0, y: 0, radius: 0,stroke: 'red', dash: [2,2], name:"filler"})  //, 
    var shapes = stage.find('Circle');
    r_filler.listening(false); // stop filler catching our mouse events.
    layer.add(r_filler)
      
    stage.draw()

    var posStart;
    var posNow;
    var isPaint = false;
    
    var mode = 'circle';
    var circle_mode = ""
    var dragging = ""
    var lastLine;
      
    var drawingLine = false 
    var line 
    var circles = []
    var labels = []
      
      // helper function for drag and draw the circle 
     function startDrag(posIn){
        
       posStart = {x: posIn.x, y: posIn.y};
       posNow = {x: posIn.x, y: posIn.y};
        
       var shapes = stage.find('Circle');
       
     }
      
     function updateDrag(posIn){ 

      // update rubber circle position
       posNow = {x: posIn.x, y: posIn.y};
       var posRect = reverse(posStart,posNow);
       r_filler.x(posRect.x1);
       r_filler.y(posRect.y1);


       radius = Math.sqrt(Math.pow((posRect.x2 - posRect.x1), 2) + Math.pow((posRect.y2 - posRect.y1), 2))    
       r_filler.radius(radius);
       r_filler.visible(true);  
       //console.log(r_filler)
       layer.draw()
       stage.draw(); // redraw any changes.

     }
      
     // reverse co-ords if user drags left / up
    function reverse(r1, r2){
      var r1x = r1.x, r1y = r1.y, r2x = r2.x,  r2y = r2.y, d;
      if (r1x > r2x ){
        d = Math.abs(r1x - r2x);
        r1x = r2x; 
        r2x = r1x + d;
      }
      if (r1y > r2y ){
        d = Math.abs(r1y - r2y);
        r1y = r2y; r2y = r1y + d;
      }
        return ({x1: r1x, y1: r1y, x2: r2x, y2: r2y}); // return the corrected rect.     
    }
      
      
      
   
      
      

     stage.on('mousedown touchstart', function (e) {
       
          
        if (mode == "line"){
            drawingLine = true 
             const pos = stage.getPointerPosition();
            line = new Konva.Line({
                stroke: 'black',
                strokeWidth: 8,
                // remove line from hit graph, so we can check intersections
                listening: true,
                draggable: true, 
                points: [pos.x, pos.y]
                });
            layer.add(line);
            
         
        }else if (mode == "circle"){
            
            if (e.evt.button === 2) { //prevent right click to create label 
                return;
            }
            circle_mode = "drawing"
            console.log('filler circle')
            console.log(r_filler)
            dragging = "no"
            startDrag({x: e.evt.layerX, y: e.evt.layerY})            
            
            
        }else if (mode == "label"){
            
        }

      });

      stage.on('mouseup touchend', function (e) {
        if (mode == "line"){
            
            if (!drawingLine) {
                line.destroy()
                return;
            }
            
            drawingLine = false 
            
         
        }else if (mode == "circle"){
            isPaint = false;
            if (circle_mode === "drawing" && dragging === "yes" ){
                r_filler.visible(false)
                if (r_filler.radius()>5){
                    var newCirc = new Konva.Circle({
                      x: r_filler.x(),
                      y: r_filler.y(),
                      radius: r_filler.radius(),
                      fill: 'red',
                      listening: true, 
                        draggable: true, 
                        name: "real_circle"
                    })
                     
                     circles.push(newCirc)
                    layer.add(newCirc);
                    stage.draw();
                    
                    
                }else{
                    alert("The circle you drew is too small!Please try again!")
                }
            }   
        }else if (mode == "label"){
            
        }
          dragging = "no"
          circle_mode = ""
          isPaint = false;
          drawingLine = false 
      });

      // and core function - drawing
      
   
      
      
      
    stage.on('mousemove touchmove', function (e) {
        
        if (mode == "line") {
            
            if (!line){
                
                return; 
            }
            if(drawingLine == false) {
                
                return;
            }
              const pos = stage.getPointerPosition();
              const points = line.points().slice();
              points[2] = pos.x;
              points[3] = pos.y;
              line.points(points);
              layer.batchDraw();
            
   
        }else if(mode == "circle"){
            
            if (circle_mode === "drawing"){
                dragging = "yes"
                updateDrag({x:e.evt.layerX, y:e.evt.layerY})
                console.log("am i updating?")
                console.log(r_filler)
            }
            
            //
        }else if(mode == "label"){
            
        }
          
          
      });

      var select = document.getElementById('tool');
      select.addEventListener('change', function () {
        mode = select.value;
      })
    
   
    stage.draw() // First draw of canvas.
    
      
let currentShape;
var menuNode = document.getElementById('menu');
      
//delete button
document.getElementById('delete-button').addEventListener('click', () => {
       
        var shapes = stage.find('Circle');
        currentShape.destroy();
        layer.draw();
        
        
      var shapes = stage.find('Circle');
        
          // here's to actuall remove circle 
          
        //remove circles or labels from the array 
        var circle_index = circles.indexOf(currentShape);
        if (circle_index > -1) {
        circles.splice(circle_index, 1);
        }
          
        var label_index = labels.indexOf(currentShape);
        if (label_index > -1) {
        labels.splice(label_index, 1);
        }
          
});
        
        
     

      window.addEventListener('click', () => {
        // hide menu
        menuNode.style.display = 'none';
      });

stage.on('contextmenu', function (e) {
        // prevent default behavior
        e.evt.preventDefault();
        if (e.target === stage | e.target === r1) {
          // if we are on empty place of the stage we will do nothing
          return;
        }
          
        // this might be the ghost circles created by empty clicking 
        currentShape = e.target;
     
        // show menu
        menuNode.style.display = 'initial';
        var containerRect = stage.container().getBoundingClientRect();
        menuNode.style.top =
          containerRect.top + stage.getPointerPosition().y + 4 + 'px';
        menuNode.style.left =
          containerRect.left + stage.getPointerPosition().x + 4 + 'px';
        
});      
      
stage.on('click', function (e) {
    
    if (mode != "label"){
        return;
    }
        // prevent default behavior
        
        e.evt.preventDefault();
        if (e.evt.button === 2) { //prevent right click to create label 
            return;
        }
        
        if (e.target === stage | e.target === r1 | e.target.className === "Line" | e.target.className === "Text") {
          // if we are on empty place of the stage we will do nothing
          return;
        }
        currentShape = e.target;
    
       
        var textNode = new Konva.Text({
                text: "Add label here!",
                x:  currentShape.attrs.x - currentShape.attrs.radius/2 ,
                y:  currentShape.attrs.y ,
                fontSize: 20,
                fill: "black", 
            draggable: true, 
                });
        
        console.log("currentShape")
        console.log("create New TextNode")
        console.log(textNode)
        
        

      layer.add(textNode);
      layer.draw();
      textNode.on('dblclick', () => {
        // create textarea over canvas with absolute position

        // first we need to find position for textarea
        // how to find it?

        // at first lets find position of text node relative to the stage:
        var textPosition = textNode.getAbsolutePosition();
        
        // then lets find position of stage container on the page:
        var stageBox = stage.container().getBoundingClientRect();

        // so position of textarea will be the sum of positions above:
        var areaPosition = {
          x: textPosition.x + stageBox.x,
          y: textPosition.y + stageBox.y
        };

       
        

        // create textarea and style it
        var textarea = document.createElement('textarea');
        document.body.appendChild(textarea);

        textarea.value = textNode.text();
        textarea.style.position = 'absolute';
        textarea.style.top = areaPosition.y + 'px';
        textarea.style.left = areaPosition.x + 'px';
        textarea.style.width = textNode.width();

        textarea.focus();
        console.log("text area")
        console.log(textarea)

        textarea.addEventListener('keydown', function (e) {
          // hide on enter
          if (e.keyCode === 13 |e.keyCode === 9) {
            textNode.text(textarea.value);
            // to prevent no modifications to content
            if (textarea.value != trial.textbox_default){
            labels.push(textNode)
            }
            layer.draw();
            document.body.removeChild(textarea);
          }
        });
      });
              
        
      });   
      
      
      
      
      
      
      
      
      

display_element.querySelector('#jspsych-draw-circles-done-btn').addEventListener('click', function(){

    console.log(labels)
      var trial_data = {
        //"locations": JSON.stringify(locations),
        //"rt": rt,
        "labels_raw": labels, 
        "labels_processed": labels.map(function(x){return ({text: x.attrs.text, x: x.attrs.x, y: x.attrs.y})}),
        "circles_raw": circles,
        "circles_location":circles.map(function(x){return({x: x.attrs.x, y: x.attrs.y, r: x.attrs.radius})})
      };
        
       
      display_element.innerHTML = '';
      jsPsych.finishTrial(trial_data);
    
      // advance to next part

});

  }

  return plugin;

})();