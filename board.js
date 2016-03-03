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

    // add walls around the edges (except in a small number of places)
    addRow(board1, 0, 0, WIDTH / square);
    addRow(board1, 0, HEIGHT / square - 1, WIDTH / square);
    addCol(board1, 0, 0, HEIGHT / square);
    addCol(board1, WIDTH / square - 1, 0, HEIGHT / square);

    removeCol(board1, 0, (HEIGHT / 2 / square) - 11, 20);
    removeCol(board1, WIDTH / square - 1, (HEIGHT / 2 / square) - 11 , 20);

    // draw the target box
    addRow(board1, 69, 39, 20);
    addCol(board1, 69, 39, 37);
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
    addRow(board1, 85, 21, 50);
    addCol(board1, 134, 21, 55);
    addCol(board1, 58, 0, 59);
    addRow(board1, 58, 58, 12);

    return board1;
}
