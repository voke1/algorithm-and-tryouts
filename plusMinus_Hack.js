function plusMinus(arr) {
    // Write your code here
    
    let positiveCount = 0
    let negativeCount = 0
    let zeroCount = 0
    
    for(let index = 0; index < arr.length; index++){
       if( Math.sign(arr[index]) === 1){
           positiveCount++
           
       }else if(Math.sign(arr[index]) === -1){
           negativeCount++
       }else{
           zeroCount++
       }
       
        
    }
     console.log((positiveCount/arr.length).toFixed(6) + "\n" +
       (negativeCount/arr.length).toFixed(6)  + "\n" +
       (zeroCount/arr.length).toFixed(6) )
}