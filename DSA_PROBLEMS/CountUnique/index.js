// Count Unique Numbers in Array

//[1,2,3,4,5,6,85,66,5,3,2,7,9,88,76,1]

// Conditions
//let i=0
// j ka loop chalega
// if(arr[i]!==arr[j]) i++ arr[i]=arr[j]

// function checkUnique(arr) {
//   if (arr.length >0) {
//     let i = 0;
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] !== arr[j]) {
//         i++;
//         arr[i] = arr[j];
//       }
//     }
//     return i + 1;
//   } else {
//     throw new Error("Empty Array");
//   }
// }


function checkUnique(arr){
  let count=0
  let map={}
  for(let i=0;i<arr.length;i++){
    if(!map[arr[i]]){
      map[arr[i]]=1
      count++
    }
    //   map[arr[i]]++
    // }
  }
  // for(let num of arr){
  // map[num] ? map[num]=1 || count++:map[num]++
  // }
  return count
}


const result = checkUnique([1,1,2,2,3,4,4,5,6,7,8,8])
console.log(result)


