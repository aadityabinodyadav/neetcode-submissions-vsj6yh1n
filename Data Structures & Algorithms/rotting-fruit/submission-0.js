class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        if (!grid || grid.length === 0) return 0;

        const rows = grid.length;
        const cols = grid[0].length;

        const queue = [];
        let fresh = 0;
        let head = 0;
        let minutes = 0;

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                } else if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        while (head < queue.length && fresh > 0) {
            let size = queue.length - head;

            for (let i = 0; i < size; i++) {
                const [r, c] = queue[head++];

                for (const [dr, dc] of directions) {
                    const row = r + dr;
                    const col = c + dc;

                    if (
                        row >= 0 &&
                        row < rows &&
                        col >= 0 &&
                        col < cols &&
                        grid[row][col] === 1
                    ) {
                        grid[row][col] = 2;
                        fresh--;
                        queue.push([row, col]);
                    }
                }
            }

            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}