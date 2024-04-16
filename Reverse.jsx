

function reverse(arr){
    let revArr = [];
    for(let i=arr.length-1;i>=0;i--){
        revArr.push(arr[i]);
    }
    return revArr;
}

console.log(reverse([1,2,3,4,5,6]));