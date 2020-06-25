// pseudo code:
// define a variable X
// define a max variable equals to last index
// make a for loop that loop throuh X
// if statement that finds the max number
// print the result

// code:

var X = [2,-3,-1]
var max = X.length -1

for( var i=0; i<=X.length -1 ; i++){
    if(X[i] > max){X[i] = max }
}

// Diagram
// i = 1 ... result max
// i = 2 ... result not max
// i = 3 ... result not max