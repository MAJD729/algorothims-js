// pseudo code:
// Define a variable X
// Define a variable count
// Define a variable total
// Define a variable average
// make a forloop that loop through x
// if statement that makes the average operator
// print the result

//code:

var X = [2,1,3]
var count = 0
var total = 0
var avg = 0

for(var i=0 ; i<=X.length -1 ; i++){
    if(X[i] !== undefined){
        count++;
        total += X[i]
        avg = total / count;
    }}

    // Diagram 
    // i = 1 ....average = 2
    // i = 2 .... average = 1.5
    // i = 3 ....average = 2