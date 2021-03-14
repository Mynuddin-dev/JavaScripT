
var MonuExamResult = {
    Math: 90,               
    English : 39,
    Physics: 78,
    Chemestry : 80
}

console.log(MonuExamResult)

//Update
MonuExamResult.Math = 99
MonuExamResult["Chemestry"] = 88
console.log(MonuExamResult)
MonuExamResult.Bangla = 77

console.log(MonuExamResult)

var prop = "English"
MonuExamResult[prop] = 69

console.log(MonuExamResult)

console.log(MonuExamResult.ICT)


// Remove a Property
delete MonuExamResult.Bangla
console.log(MonuExamResult)