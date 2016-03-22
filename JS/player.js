/* works with the player class (or whatever js calls it) */

// this function acts like a class
// you can say var p1 = new Player(parameters); to create a new "instance" of it
function player(x, y, width, height, xSpeed, ySpeed, imgSrc, keyRight, keyLeft, keyUp, keyDown, waitTime) {
    // create its x and y positions
    this.x = x;
    this.y = y;

    // create its width and length
    this.width = width;
    this.height = height;

    // create its speed in the x and y directions
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;

    // set the image source
    this.imgSrc = imgSrc;

    // define the player's movement keysDown
    this.keyRight = keyRight;
    this.keyLeft = keyLeft;
    this.keyUp = keyUp;
    this.keyDown = keyDown;

    // set up the players wait time
    this.waitTime = waitTime;
}
