function divide (x,y){
    if (x/y < Number.MIN_VALUE){
        console.log(Number.MIN_VALUE); // 5e-324
        return "process 0"
    }
    return (x / y);
}

console.log(divide(5e-324,1)); // 5e-324 
console.log(divide(5e-324,2)); // process 0 

