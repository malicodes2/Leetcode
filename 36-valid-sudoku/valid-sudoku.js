/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let cols = new Map();
    let rows = new Map();
    let squares = new Map();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                continue;
            }

            let rowSet = rows.get(i) || new Set();
            let colSet = cols.get(j) || new Set();
            let squareSet = squares.get(Math.floor(i / 3) + ',' + Math.floor(j / 3)) || new Set();

            if (rowSet.has(board[i][j]) || colSet.has(board[i][j]) || squareSet.has(board[i][j])) {
                return false;
            }

            rowSet.add(board[i][j]);
            colSet.add(board[i][j]);
            squareSet.add(board[i][j]);

            rows.set(i, rowSet);
            cols.set(j, colSet);
            squares.set(Math.floor(i / 3) + ',' + Math.floor(j / 3), squareSet);
        }
    }
    return true;
};