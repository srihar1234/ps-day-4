

function duplicate(arr){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        let flag = true;
        for(let j=0;j<newArr.length;j++){
            if(arr[i]==newArr[j]){
                flag = false;
                break;
            }
        }
        if(flag == true){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(duplicate([2,4,6,4,5,4,4,4]));