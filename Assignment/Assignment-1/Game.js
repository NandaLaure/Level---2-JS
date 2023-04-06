// Todays Exercise
//define pointincrease
var pointIncrease = 2
//define falurecount
var failureCount = 0
//define userpoints
var userPoints = 0

//gennerate random number( use the built-in math library)


//peep the number


//get user input using the built-in prompt function
while (true){
var winningNumber = Math.ceil(Math.random() * 10) ;
console.log('winning number is ', winningNumber);
var userInput = prompt('Guess the winning number')

// prompt returns a string, so lets cast the return value to number
// use the parseInt() function to convert the stringed number to a number
userInput =parseInt(userInput)

//check the users guess against the winning number
if(userInput == winningNumber){
    //user guessed the number
    userPoints += pointIncrease ;

} else{
    failureCount++ ;
    
}

if(userPoints >= 10){
    alert('Congrats you are a KING')
    break
}
if(failureCount == 5){
    alert('Eweeehhh eee! Are you a KONG??') 
    break
}
}

//Do...while loop This loop executes only once
do{
    console.log('I am happy to do while loop')
}
while(3 > 5);