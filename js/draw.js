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
    ctx.arcTo(x+w, y, x+w, y+h, r);
    ctx.arcTo(x+w, y+h, x, y+h, r);
    ctx.arcTo(x, y+h, x, y, r);
    ctx.arcTo(x, y, x+w, y, r);
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

    // draw the new game button
    ctx.fillStyle = "rgb(124, 140, 211)";
    drawRoundRect(newGameButton.x, newGameButton.y, newGameButton.width, newGameButton.height, 15);
    drawImage("Images/Buttons/resume.png", newGameButton.x + 135, newGameButton.y + 35, 50, 50);

    // draw the switch-color-mode button
    ctx.fillStyle = "rgb(253, 196, 62)";
    drawRoundRect(colorMode.x, colorMode.y, colorMode.width, colorMode.height, 15);
    if (backgroundColor == "rgb(50, 54, 62)") {
        drawImage("Images/Buttons/day.png", colorMode.x + 25, colorMode.y + 25, 50, 50);
    } else {
        drawImage("Images/Buttons/night.png", colorMode.x + 25, colorMode.y + 25, 50, 50);
    }

    // draw the rules button
    ctx.fillStyle = "rgb(233, 107, 107)";
    drawRoundRect(rules.x, rules.y, rules.width, rules.height, 15);
    drawImage("Images/Buttons/rules.png", rules.x + 25, rules.y + 25, 50, 50);

    // draw the creators button
    ctx.fillStyle = "rgb(151, 219, 85)";
    drawRoundRect(creators.x, creators.y, creators.width, creators.height, 15);
    drawImage("Images/Buttons/creators.png", creators.x + 25, creators.y + 18, 50, 64);
}

function drawPause() {
    ctx.strokeStyle = "rgb(0, 0, 0)";

    // draw the home button
    ctx.fillStyle = "rgb(222, 110, 95)";
    drawRoundRect(home.x, home.y, home.width, home.height, 15);
    drawImage("Images/Buttons/home.png", home.x + 25, home.y + 25, 50, 50);

    // draw the restart button
    ctx.fillStyle = "rgb(151, 219, 85)";
    drawRoundRect(restart.x, restart.y, restart.width, restart.height, 15);
    drawImage("Images/Buttons/restart.png", restart.x + 25, restart.y + 25, 50, 50);

    // draw the switch-color-mode button
    ctx.fillStyle = "rgb(253, 196, 62)";
    drawRoundRect(color.x, color.y, color.width, color.height, 15);
    if (backgroundColor == "rgb(50, 54, 62)") {
        drawImage("Images/Buttons/day.png", color.x + 25, color.y + 25, 50, 50);
    } else {
        drawImage("Images/Buttons/night.png", color.x + 25, color.y + 25, 50, 50);
    }

    // draw the resume button
    ctx.fillStyle = "rgb(124, 140, 211)";
    drawRoundRect(resume.x, resume.y, resume.width, resume.height, 15);
    drawImage("Images/Buttons/resume.png", resume.x + 25, resume.y + 25, 50, 50);

    // draw the winner, if there is one
    if (winner != "none") {
        // draw the winner's box
        ctx.fillStyle = "rgb(164, 234, 215)";
        drawRoundRect(300, 25, 200, 70, 15);
        drawImage("Images/Buttons/winner.png", 345, 35, 50, 50);

        if (winner == "p1") {
            drawImage(p1.imgSrc, 410, 40, 40, 40);
        } else {
            drawImage(p2.imgSrc, 410, 40, 40, 40);
        }
    }
}

function drawGame() {
    // draw the walls from the board
    if (backgroundColor == "rgb(50, 54, 62)") {
        ctx.strokeStyle = "rgb(164, 234, 215)";
    } else {
        ctx.strokeStyle = "rgb(124, 140, 211)";
    }

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
    drawImage("Images/Buttons/pause.png", pause.x, pause.y, pause.width, pause.height);

    // draw all the traps
    for (var i = 0; i < traps.length; i += 1) {
        if (traps[i].type == "reverse") {
            ctx.strokeStyle = "rgb(124, 140, 211)";
            ctx.fillStyle = "rgb(124, 140, 211)";
        } else if (traps[i].type == "speedUp") {
            ctx.strokeStyle = "rgb(151, 219, 85)";
            ctx.fillStyle = "rgb(151, 219, 85)";
        } else if (traps[i].type == "slowDown") {
            ctx.strokeStyle = "rgb(253, 196, 62)";
            ctx.fillStyle = "rgb(253, 196, 62)";
        } else if (traps[i].type == "stop") {
            ctx.strokeStyle = "rgb(222, 110, 95)";
            ctx.fillStyle = "rgb(222, 110, 95)";
        }
        // draw the circles as traps
        drawRoundRect(traps[i].x, traps[i].y, traps[i].width, traps[i].height, 5);
    }
}

function gameMoves() {
    // make the characters move
    move()

    // if p1 hits p2
    if (p1.collides(p2)) {
        winner = "p2";
        page = "pause";
    // if p1 hits the target
    } else if (p1.collides(target)) {
        winner = "p1";
        page = "pause";
    } else {
        // check if either player hits one of the traps
        for (var i = 0; i < traps.length; i += 1) {
            if (p1.collides(traps[i])) {
                if (traps[i].type == "reverse") {
                    reverseKeys(p1);
                } else if (traps[i].type == "speedUp") {
                    speedUp(p1);
                } else if (traps[i].type == "slowDown") {
                    slowDown(p1);
                } else if (traps[i].type == "stop") {
                    stop(p1);
                }
                traps[i] = newTrap();
            } if (p2.collides(traps[i])) {
                if (traps[i].type == "reverse") {
                    reverseKeys(p2);
                } else if (traps[i].type == "speedUp") {
                    speedUp(p2);
                } else if (traps[i].type == "slowDown") {
                    slowDown(p2);
                } else if (traps[i].type == "stop") {
                    stop(p2);
                }
                traps[i] = newTrap();
            }
        }
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
        timer();
        gameMoves();
        drawGame();
    } else {
        drawGame();
        drawPause();
    }
}
