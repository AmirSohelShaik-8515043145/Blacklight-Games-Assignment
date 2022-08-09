// 2)Matrix Diagonal Sum: 


// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal


let matrix  = [[1,2,3],[4,5,6],[7,8,9]]   // 3*3 matrix

let matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]] //4*4 matrix


// Time Complexity ----> O(n)
const diagonalSum = (matrix)=>{
    if(matrix.length == 0) return 0
    let row = 0;
    let col = matrix[0].length-1
    let sum = 0;
    for(;row<matrix.length;row++){
        sum += matrix[row][row] + matrix[row][col]
        col--;
    }
    
    if(matrix.length % 2 !=0){
        let mid = Math.floor(matrix.length/2)
        sum = sum - matrix[mid][mid]
    }

    return sum
}
console.log(diagonalSum(matrix2))