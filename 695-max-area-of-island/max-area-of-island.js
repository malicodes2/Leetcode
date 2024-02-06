/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let visit = new Set();

    const dfs = (r, c) => {
        if (r < 0 || r == rows || c < 0 || c == cols || grid[r][c] == 0 || visit.has(r + ',' + c)) {
            return 0;
        }
        visit.add(r + ',' + c);
        return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
    };

    let area = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            area = Math.max(area, dfs(i, j));
        }
    }
    return area;
};