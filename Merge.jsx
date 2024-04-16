
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(mergeArrays([8,9,10],[4,5,6,8]).sort((a,b)=>a-b)); 
