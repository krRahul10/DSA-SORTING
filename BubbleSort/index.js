let arr = [3, 0, 6, 2, 1];
let N = arr.length;
function BubbleSort(arr, N) {
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  console.log(arr);
}
BubbleSort(arr, N);
function swap(arr, j, i) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
