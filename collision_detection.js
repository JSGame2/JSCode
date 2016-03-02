player.prototype.checkWall = function() {
    // if it has passed an edge of the screen, then loop it to the other side
    if (this.x < 0) { // if it is to the left of the screen
        this.x = WIDTH - this.width;
    } else if (this.x + this.width > WIDTH) { // if it is to the right of the screen
        this.x = 0;
    }
    if (this.y < 0) { // if it is above the screen
        this.y = HEIGHT - this.height;
    } else if (this.y + this.height > HEIGHT) { // if it is below the screen
        this.y = 0;
    }
}
