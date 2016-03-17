function addRow(board1, x, y, length) {
    for (var i = x; i < x + length; i ++) {
        board1[i][y] = true;
    }
}

function addCol(board1, x, y, length) {
    for (var i = y; i < y + length; i ++) {
        board1[x][i] = true;
    }
}

function removeRow(board1, x, y, length) {
    for (var i = x; i < x + length; i ++) {
        board1[i][y] = false;
    }
}

function removeCol(board1, x, y, length) {
    for (var i = y; i < y + length; i ++) {
        board1[x][i] = false;
    }
}

function newBoard() {
    var board1 = [];
    for (var i = 0; i < WIDTH; i += square) {
        var row = [];
        for (var j = 0; j < WIDTH; j += square) {
            row.push(false);
        }
        board1.push(row);
    }

    // draw the surrounding walls with a few holes in them
    newBoardHoles(board1);

    // draw the target box
    addRow(board1, 69, 39, 20);
    addCol(board1, 89, 39, 20);

    // block the gaps in the edges, sort of
    addCol(board1, 30, 15, 50);
    addCol(board1, 20, 15, 40);
    addRow(board1, 20, 15, 10);
    addCol(board1, 10, 15, 50);
    addRow(board1, 0, 64, 30);
    addCol(board1, 145, 10, 80);

    // others
    addRow(board1, 11, 89, 50);
    addCol(board1, 20, 77, 12);
    addRow(board1, 85, 89, 50);
    addCol(board1, 95, 89, 10);
    addRow(board1, 45, 75, 69);
    addCol(board1, 45, 45, 30);
    addCol(board1, 113, 45, 30);
    addRow(board1, 95, 10, 50);
    addCol(board1, 85, 0, 22);
    addRow(board1, 95, 21, 40);
    addCol(board1, 134, 21, 55);
    addCol(board1, 58, 0, 59);
    addRow(board1, 58, 58, 12);

    // create the square for the pause box
    addRow(board1, 153, 7, 7);
    addCol(board1, 153, 0, 7);

    return board1;
}

function newBoardHoles(board1) {
    // add walls around the edges (except in a small number of places)
    addRow(board1, 0, 0, WIDTH / square);
    addRow(board1, 0, HEIGHT / square - 1, WIDTH / square);
    addCol(board1, 0, 0, HEIGHT / square);
    addCol(board1, WIDTH / square - 1, 0, HEIGHT / square);

    // pick the row and column choice - 0, 1, or 2
    var rowChoice = Math.floor(Math.random() * 3);
    var colChoice = Math.floor(Math.random() * 3);

    // remove part of a row
    if (rowChoice == 0) {
        removeRow(board1, 9, 0, 20);
        removeRow(board1, 9, 99, 20);
    } else if (rowChoice == 1) {
        removeRow(board1, 59, 0, 20);
        removeRow(board1, 59, 99, 20);
    } else {
        removeRow(board1, 115, 0, 20);
        removeRow(board1, 115, 99, 20);
    }

    // remove part of a column
    if (colChoice == 0) {
        removeCol(board1, 0, 15, 20);
        removeCol(board1, 159, 15, 20);
    } else if (colChoice == 1) {
        removeCol(board1, 0, 35, 20);
        removeCol(board1, 159, 35, 20);
    } else {
        removeCol(board1, 0, 72, 20);
        removeCol(board1, 159, 72, 20);
    }

}
