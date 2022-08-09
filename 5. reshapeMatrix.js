// 5)Reshape the Matrix: 

// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12],[13,14,15],[16,17,18]]
let r = 9, c = 2;



//*********************************** Approach 1 ********************************

//Time Complexity --> O(n*n)
const flatArray = (matrix) => {
    let flatArr = []
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            flatArr.push(matrix[row][col])
        }
    }
    return flatArr
}

const reshapeMatrix = (matrix, r, c) => {
    let m = matrix.length
    let n = matrix[0].length
    let totalElement = m * n

    if (totalElement != r * c) return "Can not reshape this matrix"
    if (m == r && n == c) return matrix

    let flatArr = flatArray(matrix)
    let count = 0
    let output = []

    for (let row = 0; row < r; row++) {
        let rowArr = []
        for (let col = 0; col < c; col++) {
            let ele = flatArr[count++]
            rowArr.push(ele)
        }
        output.push(rowArr)
    }
    return output
}
console.log(reshapeMatrix(matrix, r, c))



//*********************************** Approach 2 **************************************


const reshapeMatrixOptimal = (matrix, r, c) => {
    let m = matrix.length
    let n = matrix[0].length

    if (totalElement != r * c) return "Can not reshape this matrix"
    if (m == r && n == c) return matrix


    let output = []
    let count = 0
    for (let row = 0; row < m; row++) {
        let rowArr = []
        for (let col = 0; col < n; col++) {
            rowArr.push(matrix[row][col])
            count++;
            if(count / c == 1){
                output.push(rowArr)
                count=0
            }
        }
    }
}
console.log(reshapeMatrix(matrix, r, c))