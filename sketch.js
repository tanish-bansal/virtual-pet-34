//Create variables here
var dog,dog1,happydog,foods,database,foodstock;
function preload()
{
  dog=loadImage("dogimg.png");
  happydog=loadImage("dogimg1.png")
  
  
  }
	//load images here


function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog1=createSprite(250,250,0.5,0.5) ;
  dog1.addImage(dog);
dog1.scale=0.2

  foodstock=database.ref('foods');
  foodstock.on("value",readStock)
}

function draw() {  
 background(46,139,87)
 if(keyWentDown(UP_ARROW)){
   writeStock(foods);
   dog1.addImage(happydog);
 }


  drawSprites();
  //add styles here
text("milk"+foods,50,60);
fill ("blue");
}
function readStock(data){
  foods= data.val();}


  function writeStock(x){

    if(x<=0){
      x=0;
    }
      else
      {
        x=x-1;
    }
    database.ref('/').update({foods:x});

  }



