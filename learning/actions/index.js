function decrease(){
    return {type:'DECREMENT'};
}
function increase(){
    return {type:'INCREMENT'}
}
function x2(){
    return {type:'X2'};
}
function getSum(number1,number2){
    return {type:'SUM',number1:number1,number2:number2};
}