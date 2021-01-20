var tom,jerry;
//var backgroundImage,jerry1Img,jerry2Img,jerry3Img,jerry4Img,tom1Img,tom2Img,tom3Img,tom4Img;
function preload() {
 //load the images here
//tom1Img=loadImage("tomOne.png");
//tom2Img=loadImage("tomTwo.png");
//tom3Img=loadImage("tomThree.png");
//tom4Img=loadImage("tomFour.png");
//jerry1Img=loadImage("jerryOne.png");
//jerry2Img=loadImage("jerryTwo.png")
//jerry3Img=loadImage("jerryThree.png");
//jerry4Img=loadImage("jerryFour.png");
backgroundImage=loadImage("garden.png");
}

function setup(){
 canvas(1000,800);
//create tom and jerry sprites here
tom=createSprite(500,500,10,10);
tom.debug=true;
jerry=createSprite(100,200,10,10);
jerry.debug=true;
}

function draw() {
    
 background("garden.png");
//Write condition here to evalute if tom and jerry collide

    drawSprites();
}

function keyPressed(){
//For moving and changing animation write code here
//if(keyCode===LEFT_ARROW){
//tom.velocityX=-5;
//tom.addAnimation("tomRunning",tom2Img);
//tom.changeAnnimation("tomRunning");
//}

}