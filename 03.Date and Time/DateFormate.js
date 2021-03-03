
//Date written formate
//JavaScript Long Dates
var x = new Date("January 25 2015")
console.log(x)
var x = new Date("Jan 25 2015")
console.log(x)
var x = new Date("JANUARY, 25, 2015")
console.log(x)
var x = new Date("25 January 2015")
console.log(x)

//JavaScript Short Dates
var d = new Date("2015-3-25");  //"YYYY/MM/DD"
console.log("\n"+d)
var d = new Date("2015/03/25"); //"YYYY/MM/DD"
console.log(d)
var d = new Date("25-03-2015"); //DD-MM-YYYY" why invalid??
console.log(d)
var d = new Date("03/25/2015"); //"MM/DD/YYYY"
console.log(d)

/*
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"

JavaScript ISO Dates
ISO 8601 is the international standard for the representation of dates and times.

The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
*/
var d = new Date("2020-11-18")   //(YYYY-MM-DD)
console.log(d)
var d = new Date("2020-11")     //(YYYY-MM)
console.log(d)
var d = new Date("2020")        //(YYYY)
console.log(d)
var d = new Date("2015-03-25T12:00:00Z") //(YYYY-MM-DDTHH:MM:SSZ)
console.log(d)

/*
Date and time is separated with a capital T.
UTC time is defined with a capital letter Z.
If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:
*/

var d = new Date("2015-03-25T12:00:00-06:30")
console.log(d)



