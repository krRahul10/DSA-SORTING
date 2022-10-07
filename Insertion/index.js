
let arr = [8,0,2,4,1,3,6]
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        const temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
      else {
        break;
      }
    }
  }
  return arr
}


console.log(insertionSort([8,0,2,4,1,3,6]))

// console.log(arr)