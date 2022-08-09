// 3)Array Partition: 

// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

let arr = [1, 7, 8, 9, 4, 10]

// Case 1 : (1, 7) = 1, (8, 9) = 8, (4, 10) = 4    Sum = (1 + 8 + 4) = 13 

// Case 2 : (1, 4) = 1, (7, 8) = 7, (9, 10) = 9    Sum = (1 + 7 + 8) = 17




// Time Complexity --> for sorting = O(nlogn) + for loop = O(n)
//                     So the actual time complexity would be O(nlogn)

const arrayPartition = (arr) => {
    if (arr.length % 2 != 0) {
        return console.log("Array length should be even")
    }

    arr.sort((a, b) => { return a - b })
    console.log(arr)
    let sum = 0
    for (let i = 0; i < arr.length; i += 2) {
        sum += Math.min(arr[i], arr[i + 1])
    }
    return sum
}
console.log(arrayPartition(arr))