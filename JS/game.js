//this will draw a ball on the screen
// Set some global variables
var canvas; var ctx;
var WIDTH = 800; var HEIGHT = 500;
var board;
var square = 5;
var keysDown = [];
var mousePos = {"x":0, "y":0};
var page = "home";
var backgroundColor = "rgb(50, 54, 62)";
var winner;
var time;
var traps;

// players
var p1;
var p2;

// the target sign
var target;

// home page buttons
var newGameButton = new button(240, 135, 320, 120);
var colorMode = new button(240, 265, 100, 100);
var rules = new button(350, 265, 100, 100);
var creators = new button(460, 265, 100, 100);

// pause page buttons
var home = new button(295, 145, 100, 100);
var restart = new button(405, 145, 100, 100);
var color = new button(295, 255, 100, 100);
var resume = new button(405, 255, 100, 100);

// game page buttons
var pause = new button (770, 5, 25, 30);

function newGame() {
    // create the two players
    p1 = new player(115, 90, 30, 30, 5, 5, "Images/Icons/GoodGuy_01_down_2.png", 68, 65, 87, 83, 0);

    p2 = new player(380, 230, 30, 30, 5, 5, "Images/Icons/Darth-Vader-icon.png", 39, 37, 38, 40, 0);

    // create the target sign's position and size
    target = new button(360, 210, 75, 75);

    board = newBoard();
    page = "game";
    winner = "none";
    time = 0;
    traps = [];
}

// create the timer method that will run methods every ten seconds
function timer() {
    time += 10;
    if (time % 10000 == 0) {
        time = 0;
        // change the holes in the board
        newBoardHoles(board);
        // change the two traps
        traps = [newTrap(), newTrap(), newTrap(), newTrap()];
    }

    // check the players' wait time
    if (p1.waitTime > 0) {
        p1.waitTime -= 10;
    }
    if (p2.waitTime > 0) {
        p2.waitTime -= 10;
    }
}

// Important starting function
function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // run the draw method every 10 miliseconds
    return setInterval(draw, 10);
}

// Main part of program
init();
window.addEventListener('keydown', keyPressed, true);
window.addEventListener('keyup', keyReleased, true);
window.addEventListener('mousemove', mouseMoved, true);
window.addEventListener('mousedown', mousePressed, true);
