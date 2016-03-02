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

// the main draw function
function draw() {
    // clear the screen
    clear();

    // draw the surrounding rectangle
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    drawRect(0,0,WIDTH,HEIGHT);

    // draw the walls from the board
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    drawBoard();

    // p1 image
    var p1Ready = false;
    var p1Image = new Image();
    p1Image.onload = function () {
      p1Ready = true;
    };
    p1Image.src = "Icons/hero_01.png";
    ctx.drawImage(p1Image, p1.x, p1.y, p1.width, p1.height);

    // draw p2
    ctx.strokeStyle = "green";
    ctx.fillStyle = "green";
    drawRect(p2.x, p2.y, p2.height, p2.height);
}
