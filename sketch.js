var bg, bgImg;
var bg1, bg1Img;
var play, playImg;
var fish, fishImg;
var fish1, fish1Img;
var fish2, fish2Img;
var weed, weedImg;
var weed1, weed1Img;
var weed2, weed2Img;
var gameState = 0;
var contestantCount=0;
var allContestants;
var answer;
var database;
var question, contestant, quiz;


function preload(){
  bgImg = loadAnimation("images/bg1.png","images/bg2.png","images/bg3.png");
  playImg = loadImage("images/play.png");
  bg1Img = loadImage("images/bg.png");
  fishImg = loadImage("images/carp.png");
  fish1Img = loadImage("images/fish.png");
  fish2Img = loadImage("images/fish1.png");
  weedImg = loadImage("images/under.png");
  weed1Img = loadImage("images/under1.png");
  weed2Img = loadImage("images/under2.png");
}

function setup() {
  createCanvas(1000,600);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  bg = createSprite(500,300,1000,600);
  bg.addAnimation("moving",bgImg);
  bg.scale = 2.6;

  //play = createSprite(500,350,50,50);
  //play.addImage(playImg);
  //play.scale = 0.36;
  
  fish = createSprite(80,60,20,20);
  fish.addImage(fishImg);
  fish.scale = 0.3;

  fish1 = createSprite(850,50,20,20);
  fish1.addImage(fish1Img);
  fish1.scale = 0.4;

  fish2 = createSprite(500,470,20,20);
  fish2.addImage(fish2Img);
  fish2.scale = 0.3;
  
  weed = createSprite(80,530,20,20);
  weed.addImage(weedImg);
  weed.scale = 0.4;

  weed1 = createSprite(920,520,20,20);
  weed1.addImage(weed1Img);
  weed1.scale = 0.4;
}

function draw() {
  background(bg1Img);
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  //if(mousePressedOver(play)){
    // question1();
  //}
  
  drawSprites();
  fill("cyan");
  textSize(40);
  text("AQUAMARINE QUIZ",300,50);
}
