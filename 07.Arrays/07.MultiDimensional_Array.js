/*
Multidimensional arrays are not directly provided in JavaScript. If we want to use anything which acts as a 
multidimensional array then we need to create a multidimensional array by using another one-dimensional array. 
So multidimensional arrays in JavaScript is known as arrays inside another array. We need to put some arrays
inside an array, then the total thing is working like a multidimensional array.
*/

// var activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ]

// console.log(activities)
// console.table(activities)

// //adding elemnt
// activities.push(['Study',2])
// console.table(activities)

// // adding element on the middle
// activities.splice(1, 0, ['Programming', 2])
// console.table(activities)

// //remove an element
// activities.pop();
// console.table(activities);



// iteration
// loop the outer array
// for (let i = 0; i < activities.length; i++) {
//     // get the size of the inner array
//     var innerArrayLength = activities[i].length;
//     // loop the inner array
//     for (let j = 0; j < innerArrayLength; j++) {
//         console.log('[' , i , ',' , j ,'] = ' + activities[i][j]);
//     }
// }






// var col = ["Name", "Id", "Salary"]
// var arr1 = ["ABC", 24, 18000]
// var arr2 = ["EFG", 30, 30000]
// var arr3 = ["IJK", 28, 41000]
// var arr4 = ["EFG", 31, 28000]
// var arr5 = ["EFG", 29, 35000]

// //method 1
// var info = [col ,arr1, arr2, arr3, arr4, arr5]  
// console.table(info)

// //method 2
// var salary = [
//    ["Name", "Id", "Salary"],
//    ["ABC", 24, 18000],
//    ["EFG", 30, 30000],
//    ["IJK", 28, 41000],
//    ["EFG", 31, 28000],
//    ["EFG", 29, 35000]
// ]


var MDA = [

    ["A", "B", "C", "D", "E","F"],
    [11, 22, 33, 44, 55, 66],
    [12, 13, 14, 15, 16, 17],
    [21, 23, 24, 25, 26, 27],
    [40, 30, 20, 50, 60, 70]
    
]
 
console.table(MDA)

console.log(MDA.length)
for (var i = 0; i < MDA.length; i++){
    for (var j = 0; j < MDA[i].length; j++)
        console.log("["+i+"]"+"["+j+"]" +":" + MDA[i][j])
}

MDA.pop()
console.table(MDA)

MDA.splice(1, 0, [34,43,32,21,43,56])
console.table(MDA)

// New row to be added
var newRow = [99, 88, 77, 66, 55, 44]

// Adding the new row to the MDA
MDA.push(newRow)
console.table(MDA)


var newColumnValues = ["G", 77, 18, 28, 80,90]

// Adding a new column to the MDA
for (let i = 0; i < MDA.length; i++) {
  MDA[i].push(newColumnValues[i]);
}

console.table(MDA);

// pop 
for (let i = 0; i < MDA.length; i++) {
    MDA[i].pop(newColumnValues[i]);
  }
  
console.table(MDA);
  

// console.log(MDA[1])
// console.log(MDA[2])
// console.log(MDA[3])
// console.log(MDA[3][4])
// console.log(MDA[2][3])
// console.log(MDA[0][5])

MDA[0][5] = "KK"

console.table(MDA)

MDA[3][4] = [32, 34, 56]
console.table(MDA)

MDA.push([34, 56, 78, 90, 98, 76])
console.table(MDA)

