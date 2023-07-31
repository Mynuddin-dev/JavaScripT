/*
There are 4 ways to create a new date object:

new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)

*/
var date = new Date()
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(date.toTimeString())

console.log("\n\n")

console.log(date.getDate())
console.log(date.getDay()) // Sunday - Saturday : 0 - 6
console.log(date.getMonth()) // Count from 0
console.log(date.getFullYear())


console.log(date.getYear())
// For years greater than or equal to 2000, the value returned by getYear() is 100 or greater. For example, if the year is 2026, getYear() returns 126.
// For years between and including 1900 and 1999, the value returned by getYear() is between 0 and 99. For example, if the year is 1976, getYear() returns 76.
// For years less than 1900, the value returned by getYear() is less than 0. For example, if the year is 1800, getYear() returns -100.


console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())
console.log("\n\n")
console.log(date.getUTCDate())
console.log(date.getUTCDay())
console.log(date.getUTCMonth())
console.log(date.getUTCFullYear())
console.log(date.getUTCHours())
console.log(date.getUTCMinutes())
console.log(date.getUTCMilliseconds())

console.log(date.getTime())//The getTime() method returns the number of milliseconds* since the Unix Epoch.
//// milliseconds since Jan 1, 1970, 00:00:00.000 GMT

console.log(date.getTimezoneOffset())



// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

var d = new Date(2018, 11, 24, 10, 33, 30, 0)
console.log(d)

//01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973:

var d = new Date(0)
console.log(d)

var d = new Date(100000000000)
console.log(d)

//January 01 1970 minus 100 000 000 000 milliseconds is approximately October 31 1966:
var d = new Date(-100000000000)
console.log(d)


var d = new Date(86400000);
//One day (24 hours) is 86 400 000 milliseconds.
console.log(d)


//Get Date Segments
var date = new Date('4-1-2015'); // M-D-YYYY

var d = date.getDate();
var m = date.getMonth() + 1;
var y = date.getFullYear();
console.log(date ,"\n" , d ,m ,y)

var dateString = (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y
console.log(dateString)

