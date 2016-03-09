/* This file is where the movement is created for the players */

// the four methods below will move any player in the mentioned direction by their speed * the interval
player.prototype.right = function(repeats) {
    this.x += this.xSpeed * repeats;
    this.checkWall();
}

player.prototype.left = function(repeats) {
    this.x -= this.xSpeed * repeats;
    this.checkWall();
}

player.prototype.down = function(repeats) {
    this.y += this.ySpeed * repeats;
    this.checkWall();
}

player.prototype.up = function(repeats) {
    this.y -= this.ySpeed * repeats;
    this.checkWall();
}

function keyPressed(evt) {
    keysDown[evt.keyCode] = true;
}

function keyReleased(evt) {
    keysDown[evt.keyCode] = false;
}

function move() {
    // check movement for p1
    if (keysDown[68]) { // D key was pressed
        p1.canMove_right();
    } if (keysDown[65]) { // A key was pressed
        p1.canMove_left();
    } if (keysDown[83]) { // S key was pressed
        p1.canMove_down();
    } if (keysDown[87]) { // W key was pressed
        p1.canMove_up();
    }

    // check movement for p2
    if (keysDown[39]) { // right arrow was pressed
        p2.canMove_right();
    } if (keysDown[37]) { // left arrow was pressed
        p2.canMove_left();
    } if (keysDown[40]) { // down arrow was pressed
        p2.canMove_down();
    } if (keysDown[38]) { // up arrow was pressed
        p2.canMove_up();
    }
}

function gameOffKeys() {
    // check if they press the space key
    if (keysDown[32]) {
        restart();
    }
}
