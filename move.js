/* This file is where the movement is created for the players */

function move(evt) {
    switch (evt.keyCode) {
        // check movement for p1
        case 68: // D key was pressed
            p1.canMove_right();
            break;
        case 65: // A key was pressed
            p1.canMove_left();
            break;
        case 83: // S key was pressed
            p1.canMove_down();
            break;
        case 87: // W key was pressed
            p1.canMove_up();
            break;

        // check movement for p2
        case 39: // right arrow was pressed
            p2.canMove_right();
            break;
        case 37: // left arrow was pressed
            p2.canMove_left();
            break;
        case 40: // down arrow was pressed
            p2.canMove_down();
            break;
        case 38: // up arrow was pressed
            p2.canMove_up();
            break;
    }
}
