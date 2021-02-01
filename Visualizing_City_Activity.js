x_canvas = 600;
y_canvas = 600;

scales = 40;

cols = x_canvas/scales;
rows = y_canvas/scales;

neatline_offset = 80;

y_offset = 50;
x_offset = 50;

function setup() {
  createCanvas(x_canvas, y_canvas);
}

function draw() {
  background(220);
  textSize(16)
  textAlign(CENTER, CENTER);
  
  // stroke(200);
  // for(x=0; x<cols; x++){
  //   for(y=0; y<rows; y++){
  //     rect(x*scales, y*scales, scales, scales);
  // }
  // }

  
  var neatlineWidth = x_canvas - neatline_offset
  var neatlineHeight = y_canvas - neatline_offset

  var neatline_x = (width/2) - (neatlineWidth/2);

  var neatline_y = (height/2) - (neatlineHeight/2);
  stroke(0);
  fill(255)
  rect(neatline_x,neatline_y, neatlineWidth, neatlineHeight);
  
  fill(0);
  strokeWeight(0.5)
  text('DC Population Density Proportional Symbol Map', width/2, height/5);
  
  
  
    line(width/2 + x_offset, height/4 + y_offset, width * 3/8 + x_offset, height * 3/8 + y_offset);
    line(width * 3/8 + x_offset, height * 3/8 + y_offset, width/2 + x_offset, height/2 + y_offset);
    line(width/2 + x_offset, height/4 + y_offset, width/2 + width/4 + x_offset, height/2 + y_offset);
     line(width/2 + width/4 + x_offset, height/2 + y_offset, width/2 + x_offset, height/2 + height/4 + y_offset);
     line(width/2 + x_offset, height/2 + y_offset, width/2 + x_offset, height/2 + height/4 + y_offset);

     fill(0,200,250);
     strokeWeight(2);
     stroke(75);
     ellipse(width/2 + width/40 + x_offset, height/2 - width/40 + y_offset,  20);
      
     fill(0,180,250);
     strokeWeight(2);
     stroke(75);
     ellipse(width/2 + 6*width/40 + x_offset, height/2 + 2*width/40 + y_offset,  30);
      
     fill(0,120,250);
     strokeWeight(2);
     stroke(75);
     ellipse(width/2 + 5*width/40 + x_offset, height/2 - 2*width/40 + y_offset,  60);
      
     fill(0,160,250);
     strokeWeight(2);
     stroke(75);
     ellipse(width/2 + 3*width/40 + x_offset, height/2 + 4*width/40 + y_offset,  40);
      
    fill(0,80,250);
    strokeWeight(2);
    stroke(75);
    ellipse(width/2 - 3*width/40 + x_offset, height/2 - 5*width/40 + y_offset,  80);
      
    strokeWeight(2);
    stroke(75);
    fill(0,100,250);
    ellipse(width/2 + x_offset, height/2 - 6*width/40 + y_offset,  70);
  



}
