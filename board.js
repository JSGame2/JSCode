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


function newBoard() {
    var board1 = [];
    for (var i = 0; i < WIDTH; i += square) {
        var row = [];
        for (var j = 0; j < WIDTH; j += square) {
            row.push(false);
        }
        board1.push(row);
    }

    addRow(board1, 12, 10, 25);
    addCol(board1, 50, 30, 8);

    return board1;
}
