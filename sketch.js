var iss, iss_img, spacebg;
var spacecraft, spacecraft1, spacecraft2, spacecraft3, spacecraft4;
var hasDocked = false;


function preload() {
  iss_img = loadImage("images/iss.png");
  spacebg = loadImage("images/spacebg.jpg");
  spacecraft1 = loadImage("images/spacecraft1.png");
  spacecraft2 = loadImage("images/spacecraft2.png");
  spacecraft3 = loadImage("images/spacecraft3.png");
  spacecraft4 = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  iss = createSprite(displayWidth/2, 200);
  iss.addImage("iss", iss_img);
  iss.scale = 0.8;

  spacecraft = createSprite(displayWidth/2, 450);
  spacecraft.addImage("steam", spacecraft1);
  spacecraft.scale = 0.5;
}

function draw() {
  background(spacebg);

  if(!hasDocked) {
    if(keyDown("LEFT_ARROW")) {
      spacecraft.addImage(spacecraft3);
      spacecraft.x = spacecraft.x - 1;
    }
  }

  drawSprites();
  //display();
}