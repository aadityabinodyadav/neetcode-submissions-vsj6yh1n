class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        let islands = 0;
        let rows = grid.length;
        let cols = grid[0].length;

        for (let r = 0; r < rows; r++){
            for (let c =0; c < cols; c++){
                if(grid[r][c] === "1"){ 
                    islands ++;
                    dfs(r,c);
                }
            }

        }


        function dfs(r,c){
            //first need to check if it is out of bounds
            // then will be writing them as 0 to checkmarks
            // then move it up down and left right

            if(r<0 || r >= rows || c<0 || c >=cols || grid[r][c] === "0"){
                return
            }

            grid[r][c] = "0";

            dfs(r-1,c);
            dfs(r+1,c);
            dfs(r,c-1);
            dfs(r,c+1);
            
        }
    return islands
    }

}
