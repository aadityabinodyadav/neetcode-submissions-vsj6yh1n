class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        /*dfs wont work due to time complexity,
            bfs should be used here smartly,
            start from finding 0 which is the chest box and then look for the up,
            down, left, right and then add the nums taken to traverse,
            also check which is the minimum one and save that one only
        */

        let rows = grid.length;
        let cols = grid[0].length;
        let queue = [];

        for(let r = 0; r < rows; r++){
            for(let c=0; c < cols; c++){
                if(grid[r][c] === 0){
                    queue.push([r,c])
                }
            }
        }

        const directions = [[-1,0],[1,0],[0,-1],[0,1]];
        let head = 0;


        while(head< queue.length){
            const [r,c] = queue[head];
            head ++;

            for(const [dr,dc] of directions ){
                const row = r + dr;
                const col = c + dc;

if (row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] === 2147483647) {   
    grid[row][col] = grid[r][c]+1;
    queue.push([row,col])
}

}

        }

       
    }
}
