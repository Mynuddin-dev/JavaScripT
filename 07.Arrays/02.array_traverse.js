var house = new Array(10, 20, 30, 40, 50)
var sum = 0

for (var i = 0; i < house.length ; i++) 
{
    // console.log(house[i])
    // console.log(house[i]-5)
    // console.log(house[i]+5)
    sum=sum+house[i]
}
console.log(sum)

console.log("\n")

var house1 = new Array(10, 21, 30, 41, 50)

for (var i = 0; i < house.length ; i++) 
{
    if (house1[i] % 2 == 0) {
        console.log(house1[i])
    }
}

console.log("\n")

for (var i = 0; i < house.length ; i++) 
{
    house[i]=house[i]+10
}
console.log(house)

console.log("\n")


for (var i = 0; i < house.length ; i++) 
{
    console.log(house[i]=house[i]+10)
}

// console.log("\n")

// for (var i of house1) 
// {
//     console.log(i)
// }



// console.log("\n")

// for (var values in house1) 
// {
//     console.log(values,": ", house1[values])
// }

