// ******** CHECK SUM OF TWO ELEMENT WHICH IS EQUAL TO ZERO ******

let arr = [-5,-4,-3,-2,0,2,4,6,8,97,35,5]

// output [-4,4]

// *** BRUTE FORCE ***

// function getSumOfZero(arr){
// for(let i=0;i<arr.length;i++){
//     for(let j=1;j<arr.length;j++){
//         if(arr[i]+arr[j] ===0){
//             return [arr[i],arr[j]]
//         }
//     }
// }
// }

// let ans = getSumOfZero(arr)
// console.log(ans)

// ****** OPTIMIZED SOLUTION ******

// function checkTwoSum(arr){
//     let left = 0;
//     let right = arr.length-1
//     while(left<right){
//         let sum = arr[left]+arr[right]
//         if(sum === 0){
//             return [arr[left],arr[right]]
//         }else if(sum>0){
//             right --;
//         }else{
//             left++
//         }
//     }
// }

// let ans = checkTwoSum(arr)
// console.log(ans)