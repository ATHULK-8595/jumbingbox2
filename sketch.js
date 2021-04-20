var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite (110,600, 100, 20)
    block1.shapeColor = "blue"

    block2 = createSprite (210,600, 100, 20)
    block2.shapeColor = "orange"

    block3 = createSprite (310,600, 100, 20)
    block3.shapeColor = "red"

    block4 = createSprite (410,600, 100, 20)
    block4.shapeColor = "green"

    box = createSprite (random(20,750),200,50,50)
    box.velocityX = 9;
    box.velocityY = 5;
    //create box sprite and give velocity

    
}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites()
    box.bounceOff(edges);
    
    //create edgeSprite

    if(block1.isTouching(box)&& box.bounceOff(block1)){
        box.shapeColor = "blue"
    }

    if(block2.isTouching(box)&& box.bounceOff(block2)){
        box.shapeColor = "orange"
    }

    if(block3.isTouching(box)&& box.bounceOff(block3)){
        box.shapeColor = "red"
    }

    if(block4.isTouching(box)&& box.bounceOff(block4)){
        box.shapeColor = "green"
    }
box.collide(edges)

isTouching();

drawSprites()
    //add condition to check if box touching surface and make it box
}
function isTouching (){

if(block2.isTouching(box)) {
    box.shapeColor = orange
    box.velocityY= 0;
}
}