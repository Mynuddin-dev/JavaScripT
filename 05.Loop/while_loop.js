// var i = 1
// while (i <= 10) {
//     console.log(i + "th time execution")
//     i++
// }

// var i=1
// while (i <= 10) {
//     console.log(i + "th time execution")
//     i+=2
// }

// var i = 1
// sum = 0
// while (i <= 10) {
//     console.log(sum + " + " + i + "=" + (sum + i))
//     sum = sum + i
//     i++
// }

// var i = 1
// var n = window.prompt("Please enter the value:");
// while (i <= 10) {
//     console.log(n + " * " + i + "=" + (n * i))
//     i++
// }
//its working on the browser

// var i = 1
// while (i <= 10) {
//     console.log(5 + " * " + i + "=" + (5 * i))
//     i++
// }


// var i = 1
// while (i <= 10) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
//     i++
// }

var i = 1
while (i <= 10) {
    if (i % 2 != 0) {
        console.log(i)
    }
    i++
}

var isRunning = true
while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log("Winner Winner Chicken Dinner")
        isRunning=false
    } else {
        console.log("You random value is "+rand)
    }
    
}