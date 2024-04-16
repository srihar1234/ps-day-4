

function commonElements(arr1,arr2){
    let common = [];
    for(let i=0;i<arr1.length;i++){
        // if(arr2.includes(arr1[i]))
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                common.push(arr1[i]);
            }
        }
    }
    return common;
}

console.log(commonElements([1,2,56],[1,42,56]));