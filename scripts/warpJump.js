canW = 800;
canH= 800;

num = 5;
slope = 50/100;
b = 0;

originX = canW/2;
originY = canH/2;

function getLine(m,x,b){
  return m * x + b;
  
}

function getLine2(){
  b = random(canH/3,2/3*canH);  
  return 
}

  
function setup() {
  createCanvas(canW, canH);
  slope = random(-.2,.2);
  b = random(canH/3,2/3*canH);
  
  colorlist = ["orange","yellow","red",0xff00ff];
  colorlist2 = ["lightblue","blue","cyan","yellowgreen"];
  colorlist1 = []
  angle = atan(slope);
  
  background(20);
    let gradient = drawingContext.createLinearGradient(0, 0, 0, canH);
  gradient.addColorStop(0.0, "darkblue");
  gradient.addColorStop(0.33, "black");
  gradient.addColorStop(0.67,"purple")
  gradient.addColorStop(1.0, "black");
  drawingContext.fillStyle = gradient;
  
  square(0,0,canH,);
  fill(0,0,0,127);
  square(0,0,canH);//black opacity over everything
  push();
  translate(originX);
  rotate(angle);
  for(i = 3*width/4; i >= width/4; i--){
    //line1 = getLine(slope,i,b);
    line1 = canH/2
    //point(i,line1);
    noFill();
    if (random() < .023){
      strokeWeight(random(5))
      colorA = colorlist[round(random(3))]
      colorB = colorlist2[round(random(2))]
      if (random() < .5) {
          stroke(colorA);
    } else {
      stroke(colorB);
    }
      ellipse(i,line1,random(12,40),random(100,200));
    }
    
  }
  pop();
  //rotate((2*Math.PI)-angle);
}