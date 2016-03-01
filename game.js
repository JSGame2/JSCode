//this will draw a ball on the screen
// Set some global variables
var canvas;
var ctx;
var WIDTH = 800;
var HEIGHT = 500;

// Important starting function
function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // run the draw method every 10 seconds
    return setInterval(draw, 10);
}

// Main part of program
init();
window.addEventListener('keydown', doKeyDown, true);
