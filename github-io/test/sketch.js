//WEEK3

var text;
var canvas;
var textbox;
var slider;
var button;
var button2;
var cSlider;
var numPressed = 1;

function setup() {

  text = createP("YOU EVER HAD A HOTDOG, BRO?");

  textbox = createInput("TITLE THE PAGE");
  slider = createSlider(10, 80, 30);
  canvas = createCanvas(680, 510);

  for (var pic = 0; pic <12; pic++) {
  img = loadImage("hotdog.png"); 
  }
  imageMode(CENTER);

  button = createButton("MAKE THE HOTDOGS BIGGER");
  button2 = createButton("MAKE THE HOTDOGS SMALLER");

  cSlider1 = createSlider(0, 255, 255);
  cSlider2 = createSlider(0, 255, 200);
  cSlider3 = createSlider(0, 255, 140);

  /*hideButton = document.createElement("BUTTON");       
  t = document.createTextNode("HIDE SLIDERS"); 
  hideButton.appendChild(t);                                // Append the text to <button>
  document.body.appendChild(hideButton);*/        

   //--------------------------------
  //when enter is pushed in the textbox
  textbox.changed(updateText);

  //--------------------------------
  //whenever it changes at all
  textbox.input(updateText);
  slider.input(updateSize);

  

  //text.position(500, 300);
  text.style("font-family: Helvetica; color:#2d261e; font-size:30pt; font-weight: bold; text-align: center; text-transform: uppercase; margin-bottom: 10px; margin-top: 10px;");
  canvas.style("display:block; position: relative; margin-left: auto; margin-right: auto;");
  textbox.style("font-family: Helvetica; font-weight: bold; outline: 0; background: #FFF; display:block; margin-left: auto;  margin-right: auto; position: relative; text-transform: uppercase; text-align: center;");
  slider.style("position: relative; display:block; margin-left: auto; margin-right: auto;");
  cSlider1.style("position: relative; display:block; margin-left: auto; margin-right: auto;");
  cSlider2.style("position: relative; display:block; margin-left: auto; margin-right: auto;");
  cSlider3.style("position: relative; display:block; margin-left: auto; margin-right: auto;");
  button.style("font-family: Helvetica; font-weight: bold; position: relative; display:block; margin-left: auto; margin-right: auto;");
  button2.style("font-family: Helvetica; font-weight: bold; position: relative; display:block; margin-left: auto; margin-right: auto;");


  canvas.mouseOver(uniHide);
  canvas.mouseOut(uniShow);

  button.mousePressed(bigger);
  button2.mousePressed(smaller);

  //canvas.position(500, 400);
}

function updateText() {
  text.html(textbox.value());
}

function updateSize() {
  text.style("font-size", slider.value() + "pt");
}

function draw() {
  background(cSlider1.value(), cSlider2.value(), cSlider3.value());
  for (var j = 0; j<3; j++){
  for (var i = 0; i<4; i ++) {
    image(img,(width/8+(width/4*i)), (height/8+(height/3*j)), ((width/6)*numPressed), ((width/8)*numPressed));
    noStroke();
  
  }
}
}



function uniHide() {
  textbox.hide();
  slider.hide();
  cSlider1.hide();
  cSlider2.hide();
  cSlider3.hide();
  button.hide();
  button2.hide();
}

function uniShow() {
  textbox.show();
  slider.show();
  cSlider1.show();
  cSlider2.show();
  cSlider3.show();
  button.show();
  button2.show();
}

function bigger() {
  if (numPressed <10) {
  numPressed++;
}
} 

function smaller() {
  if (numPressed > 1) {
  numPressed--;
}
}







/*

//WEEK2

var squareX;
var squareY;

var squareSize;

var speedX;
var speedY;

//square slowly draws two parallel lines across the screen vertically

var square2X;
var square2Y;

var square2Size;

var speed2X;
var speed2Y;


function setup() {
	createCanvas(500,500);
	background(255);
  noStroke();
  rectMode(CENTER);





  squareX = (25);
  squareY = (25);

  speedX = (.5);
  speedY = (450);

  squareSize = 50;


  square2X = (25);
  square2Y = (25);

  speed2X = (450);
  speed2Y = (.5);

  square2Size = 50;

// dom.js
  var newDiv = document.createElement("div");
  newDiv.innerHTML = "i am a new div";
  document.body.appendChild(newDiv);

// vanilla js
  //var theP = document.getElementById("firstP");
  //theP.innerHTML = "modified";

// p5.js
  //var modifiedP = select('#firstP');
  //modifiedP.html('modified again');

  //vanilla js
  //var div = document.getElementById('clickable');
  //div.onClick =function() {}

  //var div = createDiv();
  //div.mouseClicked('doThing');
  // OR
  
}


function draw() {
  var circleSize = 100;

	ellipse(mouseX, mouseY, circleSize, circleSize);

	var r = map(squareX, 0, height, 0, 255);
  var g = map(squareX, 0, height, 0, 255);

  fill(r, g, 255);
  rect(squareX, squareY, squareSize, squareSize);



  squareX += speedX;
  squareY += speedY;


  if (squareX > width -squareSize/2 || squareX < squareSize/2) {
    squareX -= speedX;
    speedX = -speedX;
  }

  if (squareY > height - squareSize/2 || squareY < squareSize/2) {
    squareY -= speedY;
    speedY = -speedY;
  }

  var r2 = map(square2X, 0, width, 255, 0);
  var g2 = map(square2Y, 0, height, 255, 0);

  fill(r2, g2, 200);
  rect(square2X, square2Y, square2Size, square2Size);

  square2X += speed2X;
  square2Y += speed2Y;


  if (square2X > width - square2Size/2 || square2X < square2Size/2) {
    square2X -= speed2X;
    speed2X = -speed2X;
  }

  if (square2Y > height - square2Size/2 || square2Y < square2Size/2) {
    square2Y -= speed2Y;
    speed2Y = -speed2Y;
  }

}



function mousePressed() {
  //squares speed up and slow down when clicked
  speedX += 0.5;
  speed2Y += 0.5;
  createP("new p tag");
  }

  function buttonClicked() {
    circleSize = 200;
  }
  */






