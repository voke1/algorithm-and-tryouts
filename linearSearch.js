const linearSearch = (arr, t)=>{
    return arr.indexOf(t)

}


const linearSearch2 = (arr, t)=>{
    
    for(let index = 0; index < arr.length; index++){
        if(arr[index] === t){
            return index
        }
    }

    return -1
    
}
console.log("result", linearSearch2([-5, 2, 10, 4, 6], 1));
console.log("result", linearSearch2([-5, 2, 10, 4, 6], 10));
console.log("result", linearSearch2([-5, 2, 10, 4, 6], 4));
