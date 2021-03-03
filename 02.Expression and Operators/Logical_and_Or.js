var name =""
// var name = "Md XYZ"

// if (name.length == 0) {
//     fulname = "Md Mynuddin"
//     console.log(fulname)
// } else {
//     console.log(fulname)
// }

var fulname = name || "Md Mynuddin"
console.log(fulname)

var isok = true;

// if (isok) {
//     console.log("Everything is ok")
// }

isok && console.log("Everything is ok")