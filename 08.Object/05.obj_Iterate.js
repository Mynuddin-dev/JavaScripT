var obj = {
    x: 10,
    y: 20,
    z: 30
}

console.log(obj)
console.log("x" in obj)
console.log("K" in obj)

for (var i in obj) {
    // console.log(i)
    console.log(i + ":" +obj[i])
}