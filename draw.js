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

function drawRoundRect(x, y, w, h, r) {
    if (w < 2 * r) {
        r = w / 2;
    } if (h < 2 * r) {
        r = h / 2;
    }
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.arcTo(x+w, y,   x+w, y+h, r);
    ctx.arcTo(x+w, y+h, x,   y+h, r);
    ctx.arcTo(x,   y+h, x,   y,   r);
    ctx.arcTo(x,   y,   x+w, y,   r);
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

function changeBackgroundColor() {
    if (backgroundColor == "rgb(50, 54, 62)") {
        backgroundColor = "rgb(255, 255, 255)";
    } else {
        backgroundColor = "rgb(50, 54, 62)";
    }
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

function drawImage(imgSrc, x, y, w, h) {
    var ready = false;
    var image = new Image();
    image.onload = function () {
      ready = true;
    };
    image.src = imgSrc;
    ctx.drawImage(image, x, y, w, h);
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

function drawHome() {
    ctx.strokeStyle = "rgb(0, 0, 0)";
    drawRect(homeRestart.x, homeRestart.y, homeRestart.width, homeRestart.height);

    ctx.strokeStyle = "rgb(0, 0, 0)";
    //ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "100px monospace";
    ctx.strokeText("New Game", WIDTH/2, homeRestart.y + homeRestart.height/2);
}

function drawPause() {
    //ctx.strokeStyle = "rgb(0, 0, 0)";

    // draw the home button
    ctx.fillStyle = "rgb(222, 110, 95)";
    drawRoundRect(home.x, home.y, home.width, home.height, 15);
    drawImage("Icons/buttons/home.png", home.x + home.width/4, home.y + home.height/4, home.width/2, home.height/2);

    // draw the restart button
    ctx.fillStyle = "rgb(151, 219, 85)";
    drawRoundRect(restart.x, restart.y, restart.width, restart.height, 15);
    drawImage("Icons/buttons/restart.png", restart.x + restart.width/4, restart.y + restart.height/4, restart.width/2, restart.height/2);

    // draw the switch-color-mode button
    ctx.fillStyle = "rgb(253, 196, 62)";
    drawRoundRect(color.x, color.y, color.width, color.height, 15);
    if (backgroundColor == "rgb(50, 54, 62)") {
        drawImage("Icons/buttons/day.png", color.x + color.width/4, color.y + color.height/4, color.width/2, color.height/2);
    } else {
        drawImage("Icons/buttons/night.png", color.x + color.width/4, color.y + color.height/4, color.width/2, color.height/2);
    }

    // draw the resume button
    ctx.fillStyle = "rgb(124, 140, 211)";
    drawRoundRect(resume.x, resume.y, resume.width, resume.height, 15);
    drawImage("Icons/buttons/resume.png", resume.x + resume.width/4, resume.y + resume.height/4, resume.width/2, resume.height/2);
}

function drawGame() {
    // draw the walls from the board
    ctx.strokeStyle = "rgb(0, 0, 0)";
    drawBoard();

    // draw the target
    ctx.strokeStyle = "rgb(75,75,205)"; ctx.fillStyle = "rgb(75,75,205)";
    drawCircle(target.x, target.y, target.height, target.width);

    ctx.strokeStyle = backgroundColor; ctx.fillStyle = backgroundColor;
    drawCircle(target.x + target.width/9, target.y + target.height/9, target.height*7/9, target.width*7/9);

    ctx.strokeStyle = "rgb(205, 75, 75)"; ctx.fillStyle = "rgb(205, 75, 75)";
    drawCircle(target.x + target.width*2/9, target.y + target.height*2/9, target.height*5/9, target.width*5/9);

    ctx.strokeStyle = backgroundColor; ctx.fillStyle = backgroundColor;
    drawCircle(target.x + target.width/3, target.y + target.height/3, target.height/3, target.width/3);

    // draw p1's image
    p1.drawImg();

    // draw p2's image
    p2.drawImg();

    // draw the pause button
    drawImage("Icons/buttons/pause.png", pause.x, pause.y, pause.width, pause.height);
}

function gameMoves() {
    // make the characters move
    move()

    if (p1.collides(p2)) {
        winner = "p2";
        page = "pause";
    } else if (p1.collides(target)) {
        winner = "p1";
        page = "pause";
    }
}

// the main draw function
function draw() {
    // clear the screen
    clear();

    // draw the surrounding rectangle
    ctx.fillStyle = backgroundColor;
    ctx.strokeStyle = "rgb(0, 0, 0)";
    drawRect(0,0,WIDTH,HEIGHT);

    if (page == "home") {
        drawHome();
    } else if (page == "game"){
        gameMoves();
        drawGame();
    } else {
        drawGame();
        drawPause();
    }
}
