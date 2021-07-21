//TODO: alert needs to be variable in order for the language to work 


jsPsych.plugins['konva-draw-circle'] = (function(){

  var plugin = {};

  plugin.info = {
    name: 'konva-draw-circle',
    parameters: {
        
        canvas_width: {
            
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sort area width',
        default: 550, //550,
        description: 'The height of the container that subjects can move the stimuli in.'
            
        },
        canvas_height:{
        
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sort area height',
        default: 550, //550,
        description: 'The height of the container that subjects can move the stimuli in.'
  
        },
        textbox_default:{
        
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'textbox_default',
        default: "Add label here",
        description: 'text that prompts participants to input label'
        
        },
        
        delete_button:{
        
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'delete_button',
        default: "Delete",
        description: 'label on delete button'
        
        },
        
        unlabeled_alert:{
        
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'unlabeled_alert',
        default: "",
        description: 'alert text when the participants have not labeled all the drawn circles'
        
        },
        no_circle_alert:{
        
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'no_circle_alert',
        default: "",
        description: 'alert text when the participants have not drawn any circle'
        
        },
        too_small_alert:{
        
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'too_small_alert',
        default: "",
        description: 'alert text when the circle just drawn is too small'
        
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
    
    html += '<body>' + 
    '<div id="stage-parent">'+
    '<div id="container1"></div>'+
    '<div id="menu">'+
    '<div>' + 
    '<button id="delete-button">'+
    trial.delete_button+
    '</button>'+
    '</div>'+
    '</div>'
      
    display_element.innerHTML = html

      
      
    display_element.innerHTML += '<p><button id="jspsych-draw-circles-done-btn" class="jspsych-btn">'+trial.button_label+'</button></p>';
      
// set up stage
      
    var stage = new Konva.Stage({container: 'container1', width: trial.canvas_width, height: trial.canvas_height});
    var layer = new Konva.Layer({draggable: false});
    stage.add(layer);
      
// important array to keep track of circles and labels       
    var circles = []
    var labels = []
      

// draw a background rect to catch events.
    var r1 = new Konva.Rect({x: 0, y: 0, width: trial.canvas_width, height: trial.canvas_height, fill: 'white', stroke: "black"})    
    layer.add(r1)
      

// draw a circle to be used as the rubber area
      
    var r2 = new Konva.Circle({x: 0, y: 0, radius: 0,stroke: 'red', dash: [2,2]})  
    var shapes = stage.find('Circle');
    r2.listening(false); // stop r2 catching our mouse events.
    layer.add(r2)
      

    stage.draw() // First draw of canvas.
    var posStart;
    var posNow;
    var mode = '';
    var dragging = ""
      
      
    function startDrag(posIn){
      posStart = {x: posIn.x, y: posIn.y};
      posNow = {x: posIn.x, y: posIn.y};
        
      console.log("konva offical find circles in start drag")
      var shapes = stage.find('Circle');
      console.log(shapes)
      
    }

    function updateDrag(posIn){ 

      // update rubber circle position
      posNow = {x: posIn.x, y: posIn.y};
      var posRect = reverse(posStart,posNow);
      r2.x(posRect.x1);
      r2.y(posRect.y1);

      //r2.radius(posRect.x2 - posRect.x1);
      //r2.height(posRect.y2 - posRect.y1);

     radius = Math.sqrt(Math.pow((posRect.x2 - posRect.x1), 2) + Math.pow((posRect.y2 - posRect.y1), 2))    

      r2.radius(radius);

      r2.visible(true);  

      stage.draw(); // redraw any changes.

    }

// start the rubber drawing on mouse down.
    r1.on('mousedown', function(e){ 
      console.log("mouse down!")
      if (e.evt.button === 2) { //prevent right click to create label 
                return;
      }
      mode = 'drawing';
      dragging = "no"
         
    
      startDrag({x: e.evt.layerX, y: e.evt.layerY})
      })

// update the rubber rect on mouse move - note use of 'mode' var to avoid drawing after mouse released.
    r1.on('mousemove', function(e){ 
        
        if (mode === 'drawing'){
          dragging = "yes"
          updateDrag({x: e.evt.layerX, y: e.evt.layerY})
        }
        
    })

// here we create the new rect using the location and dimensions of the drawing rect.
    r1.on('mouseup', function(e){ 

        console.log("in mouseup")
        console.log(e)
        console.log(e.evt.button)
        
        
        r2.visible(false)
        

        
        if (mode === "drawing" && dragging === "yes" ){
            
            
            console.log("???")
            console.log(r2.radius())
            if (r2.radius()>5){
            
        var newCirc = new Konva.Circle({
          x: r2.x(),
          y: r2.y(),
          radius: r2.radius(),
          fill: 'red',
          listening: true
        })
        
        circles.push(newCirc)
        console.log("before get rid of empty circles")
        console.log(circles)
        
         layer.add(newCirc);
        stage.draw();
                
        }else{
            alert(trial.too_small_alert)
        }
            
            
        

        }
        
        mode = '';
        dragging = "no"
        
       /*
        //circles.push(newCirc)
        circles.push(newCirc)
        console.log("before get rid of empty circles")
        console.log(circles)
        //get rid of empty clicking, get rid of mini circles
        circles = circles.filter(item => (item.attrs.radius > 1))
        console.log("got rid of empty cirlces")
        console.log(circles)
        console.log("konva offical find circles in mouse up!")
        var shapes = stage.find('Circle');
        console.log(shapes)
        // get rid of drawn and click circles 
        // because the newly created circles are always the last on the array
        // so only compare the last two elements 
/* 
        // only meaningful with more than one circles in array
        if (circles.length > 1){
        var last_circle = circles[circles.length-1]
        var second_to_last_circle = circles[circles.length-2]

        if (last_circle.attrs.x === second_to_last_circle.attrs.x &&
            last_circle.attrs.y === second_to_last_circle.attrs.y &&
            last_circle.attrs.radius === second_to_last_circle.attrs.radius){

            circles.pop()
        }



        }
*/

        
    })
      



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
      
      
     let currentShape;
    var menuNode = document.getElementById('menu');
      
//delete button
      document.getElementById('delete-button').addEventListener('click', () => {
          
        console.log("before")  
        console.log(currentShape)
        console.log(circles)
        console.log("konva offical find circles")
        var shapes = stage.find('Circle');
        console.log(shapes)
        //currentShape = circles[circles.length-1]
        console.log("I'm detroying:")
        console.log(currentShape)
        currentShape.destroy();
        layer.draw();
        
        console.log("current circles after destryoing")
        console.log(circles)
        console.log("konva offical find circles")
      var shapes = stage.find('Circle');
        console.log(shapes)
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
         
        /*  
        // so we want to redirec to the correct Cirlce in our circles  
        var match_index = -1 
        for (var i = 0; i < circles.length; i ++){
            circle = circles[i]
            if (
                currentShape.attrs.x === circle.attrs.x &&
                currentShape.attrs.y === circle.attrs.y &&
                currentShape.attrs.radius === circle.attrs.radius
            ){
                match_index = i
            }
        }
          
        currentShape = circles[i]
          */
        console.log("in contextmenu")
        console.log(e.target)
        console.log(circles)  
        
        
        // show menu
        menuNode.style.display = 'initial';
        var containerRect = stage.container().getBoundingClientRect();
        menuNode.style.top =
          containerRect.top + stage.getPointerPosition().y + 4 + 'px';
        menuNode.style.left =
          containerRect.left + stage.getPointerPosition().x + 4 + 'px';
        
      });
        

// click on circle and create label 
    stage.on('click', function (e) {
        // prevent default behavior
        e.evt.preventDefault();
        if (e.evt.button === 2) { //prevent right click to create label 
            return;
        }
        
        if (e.target === stage | e.target === r1 ) {
          // if we are on empty place of the stage we will do nothing
          return;
        }
        currentShape = e.target;
        
        var textNode = new Konva.Text({
        text: trial.textbox_default,
        x:  currentShape.attrs.x - currentShape.attrs.radius/2 ,
        y:  currentShape.attrs.y ,
        fontSize: 20,
        fill: "white"
      });
        
        

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

      var end_time = performance.now();
      var rt = end_time - start_time;
      // gather data
      // get position of drawn circles
      var locations = [];
    
            
      //need to check if every circles have labels associated with it
    
      var label_locations = [];
      var circle_locations = [];
    
      for (var i = 0; i < labels.length; i++){
          label = labels[i]
          label_x = label.attrs.x
          label_y = label.attrs.y
          
          label_locations.push({
              "label": label, 
              "label_x": label_x, 
              "label_y": label_y 
          })
      }
    
      for (var i = 0; i < circles.length; i++){
          circle = circles[i]
          circle_x = circle.attrs.x
          circle_y = circle.attrs.y 
          circle_r = circle.attrs.radius 
          
          circle_locations.push({
              "circle_x": circle_x, 
              "circle_y": circle_y, 
              "circle_r": circle_r
          })
      }
    
     // loop through all circles and check if there is at least one label that matches the number of circle 
    
    
    /*
      no_label_counter = 0 
    
      
          
      
      for (var i = 0; i < circle_locations.length; i++){
          
          current_circle = circle_locations[i]
          current_cx = current_circle.circle_x
          current_cy = current_circle.circle_y
          current_cr = current_circle.circle_r
          label_match_count = 0 
          
          for (var j = 0; j < label_locations.length; j++){
              
              current_label = label_locations[j]
              current_lx = current_label.label_x
              current_ly = current_label.label_y
              
              // count how many labels' coordinates fall in the circle's range 
              if (current_lx > (current_cx - current_cr) &&
                  current_lx < (current_cx + current_cr) &&
                  current_ly > (current_cy - current_cr) &&
                  current_ly < (current_cy + current_cr)){
                  label_match_count += 1
              }
              
          }
          
          if (label_match_count === 0){
              no_label_counter += 1
          } 
          
      }
          
      console.log("no label counter")
      console.log(no_label_counter)
      
           
    if (no_label_counter > 0){
        alert(trial.unlabeled_alert)
    }else */
        
    if (circles.length === 0){
        alert(trial.no_circle_alert)
        
    }else{
            
       console.log("not zero ")
      for(var i=0; i<circles.length; i++){
        
        current_circle = circles[i] // not mapping labels to circles
        //current_label = labels[i]
        locations.push({
          //"label": current_label.attrs.text, 
          "x": current_circle.attrs.x,
          "y": current_circle.attrs.y,
          "radius": current_circle.attrs.radius
        });
      }
    
      console.log("Finish???")
      var trial_data = {
        "locations": JSON.stringify(locations),
        "rt": rt,
        "labels": labels.map(function(x){return x.attrs.text})
        
      };
        
      display_element.innerHTML = '';
      console.log("Finish???")
      jsPsych.finishTrial(trial_data);

    }
    
      // advance to next part
      
    });

  }

  return plugin;

})();