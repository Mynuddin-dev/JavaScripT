/*
if
else
else if
switch 

if( condition ) {
   // statements
}


if( condition )
   statement_1
   statement_2;


if( condition ) {
  // statement
} else { 
  // statement (when condition evaluates to false)
}



if (condition_1) {
   // statments
} else if (condition_2) {
  // statments
} else {
   // statments
}


*/

var a = 100  //200
var b = 200
if (a > b) {
    console.log('a is greater than b')
}else if (a < b) {
    console.log(b,' is  greater than ',a)
} else {
    console.log(a,' is equal to ',b)
}

console.log("\n")





var ab = 67
var bc = 38
var cd = 89
if(ab > bc){
    if(ab>cd){
        console.log(ab, "ab is greatest number")
    }
    else {
        console.log(cd, "ab is greatest number")
    }
}else if(bc>ab){
    if(bc > cd)
    {
        console.log(bc , "bc is greatest number")
    }
    else {
        console.log(cd, "ab is greatest number")
    }
}else{
    console.log(cd , "cd is greatest number")
}
