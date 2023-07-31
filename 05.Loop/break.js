// Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.

// When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
// When you use break with a label, it terminates the specified labeled statement.
// The syntax of the break statement looks like this:

// break;
// break [label];
// The first form of the syntax terminates the innermost enclosing loop or switch.
// The second form of the syntax terminates the specified enclosing labeled statement.

// let i = 0

// while (i < 6) {
//   if (i == 3) {
//     break
//   }
//   i = i + 1
// }
// console.log(i)



// const food = "sushi";

// switch (food) {
//   case "sushi":
//     console.log("Sushi is originally from Japan.");
//     break;
//   case "pizza":
//     console.log("Pizza is originally from Italy.");
//     break;
//   default:
//     console.log("I have never heard of that dish.");
//     break;
// }



while (true) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log("Winner Winner Chicken Dinner")
        break
    } else {
        console.log("You random value is "+rand)
    }
    
}
console.log("\n")

// Infinity loop 

for (; ;) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log("Winner Winner Chicken Dinner")
        break
    } else {
        console.log("You random value is "+rand)
    }
    
}


// for (var x = 1; x <= 30; x++) {
//   if (x % 5 == 0) {
//     break
//   } else {
//     console.log(x)
//   }

// }
