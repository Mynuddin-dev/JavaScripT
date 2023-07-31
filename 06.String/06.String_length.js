var str = "Assalamu Alaikum"
var length = 0

while (true) {
    if (str.charAt(length) == "") {
        break
    }
    else {
        console.log(str.charAt(length))
        length++
    }

}


// for (; ;){
//     if (str.charAt(length) == "") {
//         break
//     }
//     else {
//         console.log("\n",length)
//         length++
//     }
// }

console.log("Length = "+length)
console.log("Length = "+str.length)
console.log("Length of something".length)