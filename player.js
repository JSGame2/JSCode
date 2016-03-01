/* works with the player class (or whatever js calls it) */

// this function acts like a class
// you can say var p1 = new Player(parameters); to create a new "instance" of it
function player(x, y, width, height, xSpeed, ySpeed) {
    // create its x and y positions
    this.x = x;
    this.y = y;

    // create its width and length
    this.width = width;
    this.height = height;

    // create its speed in the x and y directions
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
}

// the four methods below will move any player in the mentioned direction by their speed * the interval
player.prototype.right = function(repeats) {
    this.x += this.xSpeed * repeats;
}

player.prototype.left = function(repeats) {
    this.x -= this.xSpeed * repeats;
}

player.prototype.down = function(repeats) {
    this.y += this.ySpeed * repeats;
}

player.prototype.up = function(repeats) {
    this.y -= this.ySpeed * repeats;
}

// create two new players
// the players start in different positions, but are the same width and height, and have the same speed
var p1 = new player(100, 100, 25, 25, 10, 10);
var p2 = new player(400, 400, 25, 25, 10, 10);
