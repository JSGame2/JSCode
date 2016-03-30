function trap(type, x, y, width, height) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

// find the board squares the player is in
trap.prototype.freeSpace = function() {
    var x_tiles = [];

    for (var i = Math.floor(this.x / square); i < Math.floor((this.x + this.width) / square); i ++) {
        x_tiles.push(i);
    }

    var y_tiles = [];
    for (var i = Math.floor(this.y / square); i < Math.floor((this.y + this.height) / square); i ++) {
        y_tiles.push(i);
    }

    for (var i = 0; i < x_tiles.length; i++) {
        for (var j = 0; j < y_tiles.length; j++) {
            if (board[x_tiles[i]][y_tiles[j]] == true) {
                return false;
            }
        }
    }
    return true;
}

function newTrap() {
    // pick the random type for the trap
    var type = Math.floor(Math.random() * 4);
    if (type == 0) {
        type = "reverse";
    } else if (type == 1) {
        type = "speedUp";
    } else if (type == 2){
        type = "slowDown";
    } else if (type == 3) {
        type = "stop";
    }

    do {
        // pick a random x and y position that is a multiple of 5
        var xPos = Math.floor(Math.random() * 155 + 1) * 5;
        var yPos = Math.floor(Math.random() * 95 + 1) * 5;

        // create a new trap with those coordinates
        var newTrap = new trap(type, xPos, yPos, 20, 20);

    } while (!newTrap.freeSpace() || newTrap.collides(target) || newTrap.collides(p1) || newTrap.collides(p2));

    return newTrap;
}

trap.prototype.collides = function (trap2) {
    if (this.x < trap2.x + trap2.width && this.x + this.width > trap2.x && this.y < trap2.y + trap2.height && this.height + this.y > trap2.y) {
        return true;
    }
    return false;
}

function reverseKeys(player) {
    var newKeys = [player.keyRight, player.keyUp, player.keyDown, player.keyLeft].reverse();
    player.keyRight = newKeys[0];
    player.keyLeft = newKeys[3];
    player.keyUp = newKeys[1];
    player.keyDown = newKeys[2];
}

function speedUp(player) {
    if (player.xSpeed < 10 && player.ySpeed < 10) {
        player.xSpeed *= 2;
        player.ySpeed *= 2;
    }
}

function slowDown(player) {
    if (player.xSpeed > 2 && player.ySpeed > 2) {
        player.xSpeed /= 2;
        player.ySpeed /= 2;
    }
}

function stop(player) {
    player.waitTime = 2000;
}
