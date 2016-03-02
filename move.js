/* This file is where the movement is created for the players */

function move(evt) {
    switch (evt.keyCode) {
        // check movement for p1
        case 68: // D key was pressed
            p1.right(1);
            break;
        case 65: // A key was pressed
            p1.left(1);
            break;
        case 83: // S key was pressed
            p1.down(1);
            break;
        case 87: // W key was pressed
            p1.up(1);
            break;

        // check movement for p2
        case 39: // right arrow was pressed
            p2.right(1);
            break;
        case 37: // left arrow was pressed
            p2.left(1);
            break;
        case 40: // down arrow was pressed
            p2.down(1);
            break;
        case 38: // up arrow was pressed
            p2.up(1);
            break;
    }

    p1.checkWall();
    p2.checkWall();
}
