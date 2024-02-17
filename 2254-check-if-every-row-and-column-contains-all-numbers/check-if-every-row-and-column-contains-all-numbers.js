/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    let n = matrix.length;

    for (let r = 0; r < n; r++) {
        let rows = new Set();
        let cols = new Set();
        
        for (let c = 0; c < n; c++) {
            rows.add(matrix[r][c]);
            cols.add(matrix[c][r]);
        }

        if (rows.size !== n || cols.size !== n) {
            return false;
        }
    }
    return true;
};