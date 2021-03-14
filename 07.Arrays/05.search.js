var arr = [12, 34, 56, 78, 87, 98, 90]

var find = 56
var isfind = false

for (var i = 0; i < arr.length; i++){
    if (arr[i] == find) {
        console.log("Your value is found at position : " + i)
        isfind = true
        break
    }
}
if (isfind == false) {
    console.log("Your value is not found")
}

// console.log(isfind)
// console.log(!isfind)

console.log(Object.keys(arr))