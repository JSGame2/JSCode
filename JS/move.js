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
    p1.imgSrc = "Images/Icons/GoodGuy_01_down_2.png";
}

function move() {
    // check movement for p1
    if (p1.waitTime == 0) {
        if (keysDown[p1.keyRight]) { // D key was pressed
            p1.canMove_right();
            p1.update += 1;
            if (p1.imgSrc == "Images/Icons/GoodGuy_01 _right_2.png" && p1.update > 7) {
              p1.imgSrc = "Images/Icons/GoodGuy_01 _right_1.png";
              p1.update = 0;
            }
            else if (p1.imgSrc == "Images/Icons/GoodGuy_01 _right_1.png" && p1.update > 7) {
              p1.imgSrc = "Images/Icons/GoodGuy_01 _right_3.png";
              p1.update = 0;
            }
            else if (p1.update > 7) {
              p1.imgSrc = "Images/Icons/GoodGuy_01 _right_2.png";
              p1.update = 0;
            }

        } if (keysDown[p1.keyLeft]) { // A key was pressed
            p1.canMove_left();
            p1.update += 1;
            if (p1.imgSrc == "Images/Icons/GoodGuy_01_left_2.png" && p1.update > 7) {
              p1.imgSrc = "Images/Icons/GoodGuy_01_left_1.png";
              p1.update = 0;
            }
            else if (p1.imgSrc == "Images/Icons/GoodGuy_01_left_1.png" && p1.update > 7) {
              p1.imgSrc = "Images/Icons/GoodGuy_01_left_3.png";
              p1.update = 0;
            }
            else if (p1.update > 7) {
              p1.imgSrc = "Images/Icons/GoodGuy_01_left_2.png";
              p1.update = 0;
            }

        } if (keysDown[p1.keyUp]) { // W key was pressed
            p1.canMove_up();
            p1.update += 1;
            if (p1.imgSrc == "Images/Icons/GoodGuy_01_up_2.png" && p1.update > 7) {
              p1.imgSrc = "Images/Icons/GoodGuy_01_up_1.png";
              p1.update = 0;
            }
            else if (p1.imgSrc == "Images/Icons/GoodGuy_01_up_1.png" && p1.update > 7) {
              p1.imgSrc = "Images/Icons/GoodGuy_01_up_3.png";
              p1.update = 0;
            }
            else if (p1.update > 7) {
              p1.imgSrc = "Images/Icons/GoodGuy_01_up_2.png";
              p1.update = 0;
            }

        } if (keysDown[p1.keyDown]) { // S key was pressed
            p1.canMove_down();
            p1.update += 1;
            if (p1.imgSrc == "Images/Icons/GoodGuy_01_down_2.png" && p1.update > 7) {
              p1.imgSrc = "Images/Icons/GoodGuy_01_down_1.png";
              p1.update = 0;
            }
            else if (p1.imgSrc == "Images/Icons/GoodGuy_01_down_1.png" && p1.update > 7) {
              p1.imgSrc = "Images/Icons/GoodGuy_01_down_3.png";
              p1.update = 0;
            }
            else if (p1.update > 7) {
              p1.imgSrc = "Images/Icons/GoodGuy_01_down_2.png";
              p1.update = 0;
            }

        }
    }

    // check movement for p2
    if (p2.waitTime == 0) {
        if (keysDown[p2.keyRight]) { // right arrow was pressed
            p2.canMove_right();
        } if (keysDown[p2.keyLeft]) { // left arrow was pressed
            p2.canMove_left();
        } if (keysDown[p2.keyUp]) { // up arrow was pressed
            p2.canMove_up();
        } if (keysDown[p2.keyDown]) { // down arrow was pressed
            p2.canMove_down();

        }
    }
}
