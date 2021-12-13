img = "";
function preload(){
img = loadImage('dog_cat.jpg');
}
function setup(){
    canvas = createCanvas(600,450);
    canvas.center();
}
function draw(){
    image(img,0,0,600,450);
    fill("#FF0000");
    text("dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(35,50,400,380);
}