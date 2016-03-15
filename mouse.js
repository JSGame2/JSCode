function mouseMoved (evt) {
    // change the x and y position of the mouse
    mousePos.x = evt.pageX - canvas.offsetLeft;
    mousePos.y = evt.pageY - canvas.offsetTop;
}

function mousePressed (evt) {
    if (page == "game") {
        if (mouseCollides(pause)) {
            page = "pause";
        }
    } else if (page == "pause") {
        // check to see if the mouse clicked on the new game button
        if (mouseCollides(home)) {
            page = "home";
        } else if (mouseCollides(restart)) {
            newGame();
        } else if (mouseCollides(color)) {
            changeBackgroundColor();
        } else if (mouseCollides(resume)) {
            if (winner == "none") {
                page = "game";
            } else {
                newGame();
            }
        }
    } else if (page == "home") {
        if (mouseCollides(homeRestart)) {
            newGame();
        }
    }
}

function mouseCollides(rect) {
    if (mousePos.x >= rect.x && mousePos.x <= rect.x + rect.width) {
        if (mousePos.y >= rect.y && mousePos.y <= rect.y + rect.height) {
            return true;
        }
    }
    return false;
}
