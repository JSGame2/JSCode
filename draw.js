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

function drawCircle(x,y,w,h) {
    ctx.beginPath();
    ctx.arc(x + w/2, y + h/2, w/2, h/2, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
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
    gameOffKeys();

    var restartButton = {"x":100, "y":150, "width":600, "height":200};
    ctx.strokeStyle = "rgb(0, 0, 0)";
    for (var x=restartButton.x; x<restartButton.x + restartButton.width; x+=5) {
        drawRect(x, restartButton.y, 5, 5);
        drawRect(x, restartButton.y + restartButton.height, 5, 5);
    }
    for (var y=restartButton.y; y<restartButton.y + restartButton.height; y+=5) {
        drawRect(restartButton.x, y, 5, 5);
        drawRect(restartButton.x + restartButton.width, y, 5, 5);
    }
}

function drawGame() {
    // make the characters move
    move()
    p1.collides(p2);
    p1.collides(target);

    // draw the walls from the board
    ctx.strokeStyle = "rgb(0, 0, 0)";
    drawBoard();

    // draw the target
    ctx.strokeStyle = "rgb(0,0,255)";
    ctx.fillStyle = "rgb(0,0,255)";
    drawCircle(target.x, target.y, target.height, target.width);
    ctx.strokeStyle = "rgb(50, 54, 62)";
    ctx.fillStyle = "rgb(50, 54, 62)";
    drawCircle(target.x + target.width/9, target.y + target.height/9, target.height*7/9, target.width*7/9);
    ctx.strokeStyle = "rgb(255, 0, 0)";
    ctx.fillStyle = "rgb(255, 0, 0)";
    drawCircle(target.x + target.width*2/9, target.y + target.height*2/9, target.height*5/9, target.width*5/9);
    ctx.strokeStyle = "rgb(50, 54, 62)";
    ctx.fillStyle = "rgb(50, 54, 62)";
    drawCircle(target.x + target.width/3, target.y + target.height/3, target.height/3, target.width/3);

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
    ctx.fillStyle = "rgb(50, 54, 62)";
    ctx.strokeStyle = "rgb(0, 0, 0)";
    drawRect(0,0,WIDTH,HEIGHT);

    if (gameOn == false) {
        drawHomePage();
    } else {
        drawGame();
    }
}
