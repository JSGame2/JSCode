// this function acts like a class
// you can say var p1 = new Player(parameters); to create a new "instance" of it
function player(x, y, width, length, xSpeed, ySpeed) {
    // create its x and y positions
    this.x = x;
    this.y = y;

    // create its width and length
    this.width = width;
    this.length = length;

    // create its speed in the x and y directions
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
}
