const merge = (leftArr, rightArr) => {
  const ans = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl < rightEl) {
      ans.push(leftEl);
      leftIndex++;
    } else { 
      ans.push(rightEl);
      rightIndex++;
    }
  }
  return [...ans, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
};

// recursive

const mergeSort = array => {
  //console.log(array)
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);

  const leftArr = array.slice(0, middleIndex);
  const rightArr = array.slice(middleIndex);

  return merge(

   mergeSort(leftArr),

   mergeSort(rightArr));
};

console.log(mergeSort([9,4,3,8]));
