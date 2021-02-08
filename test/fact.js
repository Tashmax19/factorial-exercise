/*

Group pair;
Mercy Wamanga
Pauline Nalwanga

Parameters are variables that are defined when the funtion's subroutine is created.
Arguments are values passed in a function.
A factorial of an integer n is the product of all positive integers less than or equal to n.
this means we are multiplying our number n by each consecutive number minus one.

qn is: Write a method to calculate the factorial of a number entered passed as a parameter?

tactics to tackle qn
    there are 3 ways;
    - Using a recursive function (We will use this)
    - Using a while loop
    - And using a for loop 
*/

function factorial(num){
        
    if(num < 0){
        return -1;
    }else if(num == 0){
        return 1;
    }

    else {
    // following the definition of a factorial to get the product of that number and its consequent number. 
        return num *factorial(num-1);
    }
    }

    module.exports = factorial;