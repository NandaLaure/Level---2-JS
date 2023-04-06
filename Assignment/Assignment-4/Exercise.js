var threeMultiple = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function multipleOfThree(){
    for(var index = 0; index <= threeMultiple.length; index++){
       if(threeMultiple[index] % 2 == 0 && threeMultiple[index] % 3 == 0){
        console.log('The multiple is', threeMultiple[index])
       } 
    }
}
multipleOfThree();

