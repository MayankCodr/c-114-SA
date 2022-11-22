function preload(){
    img = loadImage("mustache2.png");
    
}
function setup(){
    canvas =  createCanvas(300, 300);
   canvas.center();
    
}
function draw(){
    image(img, 25, 25, 50, 50);
}

function take_snapshot(){
    save("myFilterImg.png")
}