let arr=[4,2,3,1,0]
let N= arr.length;


function selectionSort(arr,N){
    for(let i=0;i<N-1;i++){
        let min= i
        for(var j=i+1;j<N;j++){
            if(arr[j]<arr[min]){
                
                min=j
            }
        }
        swap(arr,min,i)
    }
    
}

selectionSort(arr,N)

function swap(arr,j,i){
let temp = arr[j]
arr[j]=arr[i]
arr[i]=temp
}

