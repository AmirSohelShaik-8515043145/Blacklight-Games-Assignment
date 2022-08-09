// 4)Pascal's Triangle : 

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly it

let n = 5


// Time complexity --> O(n*n)
const pascalTriangle = (n) => {
    let arr = []

    for (let i = 1; i <= n; i++) {
        if (i == 1) {
            let element = [1]
            arr.push(element)
        }
        
        if (i > 1) {
            let element = []
            for (let j = 0; j <i; j++) {
                let row = i-2
                let col = j
                let num = (arr[row][col-1] || 0) + (arr[row][col] || 0)
                element.push(num)
                col++
            }
            arr.push(element)
        }
    }
    return arr
}
console.log(pascalTriangle(n))