function mouseMoved (evt) {
    // change the x and y position of the mouse
    mousePos.x = evt.pageX - canvas.offsetLeft;
    mousePos.y = evt.pageY - canvas.offsetTop;
}

function mousePressed (evt) {
    if (!gameOn) {
        // check to see if the mouse clicked on the new game button
        if (mouseCollides(restartButton)) {
            restart();
        }
    }
}

function mouseCollides(rect) {
    if (mousePos.x >= rect.x && mousePos.x < rect.x + rect.width && mousePos.y >= rect.y && mousePos.y < rect.y + rect.height) {
        return true;
    }
    return false;
}
