//Write a function which receives an array and returns
//a new array which consits of odd numbers that are multiples of three
var multiplesOfThree = [2,6,9,12,15,18,24,27,30];

console.log('Before splice is called', multiplesOfThree)
var allMultiples = multiplesOfThree.splice( allOddMultiples = function(someArray){
    for(var index = 0; index < someArray.length; index++){
        if(someArray[index]% 2 != 0 && someArray[index]% 3 ==0){
            console.log('After splice is called', someArray[index]);   
        }
    }
})

allOddMultiples([2,6,9,12,15,18,24,27,30])


//Write a function to reverse the elements in an array without using the reverse method
var reversedNumbers = [2,6,9,12,15,18,24,27,30]
for(var index = reversedNumbers.length-1; index >=0; index--){
    console.log('The reversed multiples are', reversedNumbers[index]);
}

//Write a function that squares all elements in an array and returns 
//a new array that contains squared elements which are odd numbers
var numbers = [1,2,3,4,5,6];
var square = [numbers]
    for(var index = 0; index < numbers.length; index++){
        var squares = numbers[index]**2
          square.push(squares)
    }
console.log('The square is', square)

//Write a function that compares two arrays with the same
//length and returns the largest item in the array


//Write a function that combines two arays and returns a new array
var number1 = [1,2,3,4,5]
var number2 = [6,7,8,9,10]

var combinedArray = [...number1, ...number2];
console.log('The combined arrays', combinedArray)

//Write a function that returns the maximum and minimum in an array

var numbers = [12,3,9,45,24,86];

var max = 0
var min = numbers[0];
for(var index= 0; index < numbers.length-1; index++){
    if(min > numbers[index]){
        min = numbers[index]
    }
    if(max < numbers[index]){
        max = numbers[index];
    }
}
console.log('Minimum value in array is :', +min);
console.log('Miximum value in array is :', +max);