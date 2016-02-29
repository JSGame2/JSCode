//this will draw a ball on the screen
// Set some global variables
var canvas;
var ctx;
var WIDTH = 800;
var HEIGHT = 600;

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function rect(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function draw() {
    clear();
    // draw the surrounding rectangle
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    rect(0,0,WIDTH,HEIGHT);
}

// Important starting function
function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(draw, 10);
}

// Main part of program
init();
window.addEventListener('keydown',doKeyDown,true);
