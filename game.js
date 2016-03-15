//this will draw a ball on the screen
// Set some global variables
var canvas;
var ctx;
var WIDTH = 800;
var HEIGHT = 500;
var square = 5;
var board = newBoard();
var keysDown = [];
var mousePos = {"x":0, "y":0};
var page = "home";
var winner = "none";
var backgroundColor = "rgb(50, 54, 62)";

var p1 = new player(110, 90, 30, 30, 5, 5, "Icons/hero_01.png");
var p2 = new player(380, 230, 30, 30, 5, 5, "Icons/Darth-Vader-icon.png");
var target = new player(360, 210, 75, 75, 0, 0, "none");

var homeRestart = new button(100, 300, 600, 100);
var home = new button(295, 145, 100, 100);
var restart = new button(405, 145, 100, 100);
var color = new button(295, 255, 100, 100);
var resume = new button(405, 255, 100, 100);
var pause = new button (770, 5, 25, 30);

function newGame() {
    // create two new players
    // the players start in different positions, but are the same width and height, and have the same speed
    p1 = new player(110, 90, 30, 30, 5, 5, "Icons/hero_01.png");
    p2 = new player(380, 230, 30, 30, 5, 5, "Icons/Darth-Vader-icon.png");
    target = new player(360, 210, 75, 75, 0, 0, "none");

    page = "game";
    winner = "none";
}

// Important starting function
function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // run the draw method every 10 seconds
    return setInterval(draw, 10);
}

// Main part of program
init();
window.addEventListener('keydown', keyPressed, true);
window.addEventListener('keyup', keyReleased, true);
window.addEventListener('mousemove', mouseMoved, true);
window.addEventListener('mousedown', mousePressed, true);
