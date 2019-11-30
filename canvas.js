var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");

var score = 0;
var gscore = 0;
var pacman = {
  x: 50,
  y: 100,
  mouth: 320,
  dir: 0,
  speed: 5
};

canvas.height = 400;
canvas.width = 600;
mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "pac.png";

document.body.appendChild(canvas);

function render() {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(mainImage, pacman.mouth, pacman.dir, 32, 32, pacman.x, pacman.y, 50, 50);
    context.font = "20px Verdana";
    context.fillStyle ="white";
    context.fillText(`Pacman: ${score} vs Ghosh: ${gscore}`, 2, 18);
}

function playGame() {
    render();
}


function checkReady() {
    this.ready = true;
    playGame();
}

function move(keyclick) {
    if (37 in keyclick) {
        pacman.x -= pacman.speed;
        pacman.dir = 64
    }
    
    if (38 in keyclick) {
        pacman.y -= pacman.speed;
        pacman.dir = 96
    }
    
    if (39 in keyclick) {
        pacman.x += pacman.speed;
        pacman.dir = 0
    }
    
    if (40 in keyclick) {
        pacman.y += pacman.speed;
        pacman.dir = 32
    }
    
    if (pacman.x >= (canvas.width -32)) {
        pacman.x = 0;
    }
    
    if (pacman.x < 0) {
        pacman.x = (canvas.width -32);
    }
    
    if (pacman.y >= (canvas.height -32)) {
        pacman.y = 0;
    }
    
    if (pacman.y < 0) {
        pacman.y = (canvas.height -32);
    }
    
    if (pacman.mouth == 320) {
        pacman.mouth = 352;
    } else {
        pacman.mouth = 320;

    }
    
    render();
}

var keyclick = {};
document.addEventListener("keydown", function(event){
    keyclick[event.keyCode] = true
    move(keyclick)
}, false);

document.addEventListener("keyup", function(event){
    delete keyclick[event.keyCode]
    // move(keyclick)
}, false);


