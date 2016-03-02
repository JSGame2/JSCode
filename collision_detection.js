player.prototype.checkWall = function() {
    // if it has passed an edge of the screen, then loop it to the other side
    if (this.x < 0) { // if it is above the screen
        this.x = WIDTH - this.width;
    } else if (this.x + this.width > WIDTH) { // if it is right of the screen
        this.x = 0;
    }

    if (this.y < 0) { // if it is above the screen
        this.y = HEIGHT - this.height;
    } else if (this.y + this.height > HEIGHT) { // if it is left of the screen
        this.y = 0;
    }
}

// find the board squares the player is in
player.prototype.freeSpace = function() {
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

player.prototype.canMove_right = function(repeats) {
    this.right(1);
    if (this.freeSpace() == false) {
        this.left(1);
    }
}

player.prototype.canMove_left = function(repeats) {
    this.left(1);
    if (this.freeSpace() == false) {
        this.right(1);
    }
}

player.prototype.canMove_down = function(repeats) {
    this.down(1);
    if (this.freeSpace() == false) {
        this.up(1);
    }
}

player.prototype.canMove_up = function(repeats) {
    this.up(1);
    if (this.freeSpace() == false) {
        this.down(1);
    }
}
