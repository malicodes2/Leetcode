class Solution {
    List<List<String>> result = new ArrayList<>();

    public List<List<String>> solveNQueens(int n) {
        if (n == 0) {
            return result;
        }

        List<String> board = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            StringBuilder row = new StringBuilder();
            for (int j = 0; j < n; j++) {
                row.append('.');
            }
            board.add(row.toString());
        }

        int startRow = 0;
        HashSet<Integer> cols = new HashSet<Integer>();
        HashSet<Integer> diags = new HashSet<Integer>();
        HashSet<Integer> antiDiags = new HashSet<Integer>();
        solve(board, startRow, cols, diags, antiDiags);

        return result;
    }

    // private boolean isValid(List<String> board, int row, int col) {
    //     // Upward
    //     for (int i = row; i >= 0; i--) {
    //         if (board.get(i).charAt(col) == 'Q') {
    //             return false;
    //         }
    //     }

    //     // Left Diagonal Upward
    //     for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    //         if (board.get(i).charAt(j) == 'Q') {
    //             return false;
    //         }
    //     }

    //     // Right Diagonal Upward
    //     for (int i = row, j = col; i >= 0 && j < board.size(); i--, j++) {
    //         if (board.get(i).charAt(j) == 'Q') {
    //             return false;
    //         }
    //     }

    //     return true;
    // }

    private void solve(List<String> board, int row, HashSet<Integer> cols, HashSet<Integer> diags, HashSet<Integer> antiDiags) {
        if (row == board.size()) {
            result.add(new ArrayList<>(board));
            return;
        }

        for (int col = 0; col < board.size(); col++) {
            int diag = row + col;
            int antiDiag = row - col;

            if (cols.contains(col) || diags.contains(diag) || antiDiags.contains(antiDiag)) {
                continue;
            }

            cols.add(col);
            diags.add(diag);
            antiDiags.add(antiDiag);
            StringBuilder newRow = new StringBuilder(board.get(row));
            newRow.setCharAt(col, 'Q');
            board.set(row, newRow.toString());

            solve(board, row + 1, cols, diags, antiDiags);

            cols.remove(col);
            diags.remove(diag);
            antiDiags.remove(antiDiag);
            newRow.setCharAt(col, '.');
            board.set(row, newRow.toString());
        }
    }
}