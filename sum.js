// pseudo code:
// 1- defined a variable i;
// 2- defined a varibale sum to save the result and equal it to 0;
// 3- for loop from 1 to 135.
// 4- add the new number to the sum variable.
// 5- print number is: i sum: sum

// code :
var i;
var sum = 0;
for(i=1; i<=135; i++){
    sum += i
    console.log('Number is:' , i, 'sum: ',sum)
}

// Diagram :
//  i = 1 ... res => Number is: 1 sum: 1
//  i = 2 ... res => Number is: 2 sum: 3
//  i = 3 ... res => Number is: 3 sum: 6
//  i = 4 ... res => Number is: 4 sum: 10
//  i = 5 ... res => Number is: 5 sum: 15
//.
//.
//.
// i = 135 ... res=> Number is: 135 sum;