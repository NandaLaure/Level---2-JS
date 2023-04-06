

function multiple(number1, number2){
    this.number1 = number1;
    this.number2 = number2;
    for(var i = 0; i <= number2; i++){
        if(i % number1 === 0 ){
            console.log(i + 'is a multiple of', number1 + '.');
        }
        else{
            console.log(i + 'is not a multiple of ', number1 + '.');
        }
    } 
}
multipleList = new multiple(3, 20);
