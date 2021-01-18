var dog;
var database;
var foodS, foodStock;
var dogI, happyDog;

function preload()
{
  dogI = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250, 250, 10, 10);
  dog.addImage(dogI);
  dog.scale = 0.25;
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodStock);
    dog.addImage(happyDog);
  }
  drawSprites();
  textSize(20);
  fill(146, 239, 187);
  text("Press up to give the doggo some milk");
  //add styles here

}

function readStock(data){
  foodStock = data.val();
}

function writeStock(x){
  database.ref("/").update({
    Food: x
  })
}