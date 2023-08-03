var persons = [
    {
        Name: "A",
        age:19
    },
    {
        Name: "B",
        age:24
    },
    {
        Name: "C",
        age:26
    },
    {
        Name: "D",
        age:21
    }
]

var arr = [4, 5, 1, 2, -9, 3, 8, 2, 7, 1, 6, 4,-5]
arr.sort()
console.log(arr)

persons.sort()
console.log(persons)

arr.sort(function(a, b) {
    if (a > b) {
        return 1
    }else if (a < b){
        return -1
    } else {
        return 0
    }
})

console.log(arr)

persons.sort(function(a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})

console.log(persons)


// Each and every 
console.log(arr.every(function (value) {

    return value >= 0 // value%2==0
    
}))

// Atleast 1
console.log(arr.some(function (value) {
    
    return value >= 0 // value%2==0
    
}))