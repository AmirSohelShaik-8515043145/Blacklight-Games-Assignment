// 1)Two Sum:  


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


let arr = [4,8,3,17,11,16,19,1,5]   , target = 28



//*********************************** Using Brute Force ************************************/

//Time Complexity ------> O(n*n)

let twoSum = (arr , target)=>{
    for(let i =0 ; i<arr.length-1;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i] + arr[j] == target){
                return [i,j]
            }
        }
    }
    return [-1,-1]
}
console.log(twoSum(arr , target))



//****************************  Optimal Solution using Map *********************************/

// Time Complexity------> O(n)
const twoSumOptimalSol = (arr , target)=>{
    let map = new Map()
    for(let i =0;i<arr.length;i++){
        if(!map.has(target - arr[i])){
            map.set(arr[i] , i)
        }
        else{
            return [map.get(target-arr[i]) , i]
        }
    }
    return [-1,-1]
}
console.log(twoSumOptimalSol(arr, target))