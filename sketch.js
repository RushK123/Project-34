const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundImg, bg, minatorunSpriteData, minatorunSpriteSheet, minatoo; 
var minatorunAnimation = [];
var minato = [];
function preload(){
  //backgroundImg = loadImage("hokagevillagebackground.png")
  minatorunSpriteSheet = loadImage("minatorun.png");
  minatorunSpriteData = loadJSON("minatorunn.json")

  
}

function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world; 
 
  //background("hokagevillagebackground.png")
 
  bg = createImg("hokagevillagebackground.png");
  bg.position(0, 0);
  bg.size(1000,400);

  var mmrunFrames = minatorunSpriteData.frames;

  for (var j=0; j<mmrunFrames.length; j++){
    var pos = mmrunFrames[j].position;
    var ing = minatorunSpriteSheet.get(pos.x,pos.y,pos.w,pos.h);
    minatorunAnimation.push(ing);
  }

}


function draw() 
{
  background(51);

  //image(minatorunAnimation, 0, 50, width, height)
  Engine.update(engine);

  showMinato();


  
}

function showMinato(){
  if (minatorunAnimation.length>0){

    if (minatorunAnimation.length<4 && minatorunAnimation[minatorunAnimation.length-1].body.position.x<width-300){
      var pos = [-80, -100, -110, -90];
      var p = random(pos);
      minatoo = new MinatoRun(width, height-100, 200,200, p, minatoAnimation);
      minatorunAnimation.push(minatoo);
    }
    for (var i=0; i<minatorunAnimation.length; i++){
      Matter.Body.setVelocity(minatorunAnimation[i].body,{x:-0.9, y:0})
      minato[i].display();
      minato[i].animate();
    
      

    }
  }

  else{
    minatoo = new MinatoRun(width, height-100, 200,200, -100, minatorunAnimation);
    minato.push(minatoo);
  }

}
