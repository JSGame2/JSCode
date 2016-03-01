// this file is where we will create all the methods for drawings

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

// the main draw function
function draw() {
    // clear the screen
    clear();

    // draw the surrounding rectangle
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    drawRect(0,0,WIDTH,HEIGHT);

    // draw the two players as black rectangles
    ctx.fillStyle = "black";
    drawRect(p1.x, p1.y, p1.width, p1.height);
    drawRect(p2.x, p2.y, p2.height, p2.height);
}
