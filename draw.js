/* This file is where we will create all the methods for drawings */

// clears the canvas
function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// draws a rectangle
function drawRect(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawBoard() {
    for (var i = 0; i < board.length; i ++) {
        for (var j = 0; j < board[i].length; j ++) {
            if (board[i][j] == true) {
                drawRect(i * square, j * square, square, square);
            }
        }
    }
}

player.prototype.drawImg = function() {
    var ready = false;
    var image = new Image();
    image.onload = function () {
      ready = true;
    };
    image.src = this.imgSrc;
    ctx.drawImage(image, this.x, this.y, this.width, this.height);
}

function drawHomePage() {

}

function drawGame() {
    // make the characters move
    move()

    // draw the walls from the board
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    drawBoard();

    // draw the target
    var targetReady = false;
    var targetImage = new Image();
    targetImage.onload = function () {
      targetReady = true;
    };
    targetImage.src = "Icons/target.png";
    ctx.drawImage(targetImage, 360, 210, 75, 75);

    // draw p1's image
    p1.drawImg();

    // draw p2's image
    p2.drawImg();
}

// the main draw function
function draw() {

    // clear the screen
    clear();

    // draw the surrounding rectangle
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    drawRect(0,0,WIDTH,HEIGHT);

    if (gameOn == false) {
        drawHomePage();
    } else {
        drawGame();
    }
}
