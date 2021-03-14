
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(num)
console.log(num.reverse())
console.log(num)

console.log("\n")



var rnum = []
for (var i = num.length-1; i >=0 ; i--){
    rnum.push(num[i])
}
console.log(rnum)



console.log("\n")

var renum = [10,11,12,13,14,15,16,17,18,19]
for (var i = 0; i < (renum.length / 2); i++){
    var temp = renum[i]
    renum[i] = renum[renum.length - 1 - i]
    renum[renum.length - 1 - i] = temp
}
console.log(renum)


var arr = [2, 5, 8, 1, 4]
console.log(arr)
console.log(arr.sort())