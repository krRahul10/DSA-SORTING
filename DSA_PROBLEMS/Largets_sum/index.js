// find largest consecutive sum
// [1,2,3,4,3,5,4,6,7,8]

// num 4

// login

// check kro num grater toh ni arr ki length se
// 2 loop chelenge
// i arr.length-num+1 tak chalega formula hai ye
// j num tk or cond me
// tep me sum add add kro arr[i+j] ka

function largestSum(arr, num) {
  if (arr.length < num) {
    throw new Error("length issue");
  }

  let max = 0;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if(temp>max){
        max=temp
    }
   
  }
  return max
}

const result = largestSum([1,2,3,4,3,5,4,6,7,8],4)
console.log(result)
