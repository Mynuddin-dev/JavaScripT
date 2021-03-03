/*
Setting date components
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds)

setDate()	        => Sets the day as number in the date object.
setFullYear()	    => Sets the four digit full year as number in the date object. Optionally set month and date.
setHours()	        => Sets the hours as number in the date object. Optionally set minutes, seconds and milliseconds.
setMilliseconds()	=> Sets the milliseconds as number in the date object.
setMinutes()	    => Sets the minutes as number in the date object. Optionally set seconds & milliseconds.
setMonth()	        => Sets the month as number in the date object. Optionally set date.
setSeconds()	    => Sets the seconds as number in the date object. Optionally set milliseconds.
setTime()	        => Sets the time as number in the Date object since January 1, 1970, 00:00:00 UTC.
setUTCDate()	    => Sets the day in the date object as per UTC time zone.
setUTCFullYear()	=> Sets the full year in the date object as per UTC time zone
setUTCHours()	    => Sets the hour in the date object as per UTC time zone
setUTCMilliseconds()=> Sets the milliseconds in the date object as per UTC time zone
setUTCMinutes()	    => Sets the minutes in the date object as per UTC time zone
setUTCMonth()	    => Sets the month in the date object as per UTC time zone
setUTCSeconds()	    => Sets the seconds in the date object as per UTC time zone
setYear()	        => Sets the year in the date object. This method is Deprecated

*/
// SetFullYear
var d = new Date()
console.log(d , d. getFullYear())
d.setFullYear(d.getFullYear() + 2)
console.log(d)
d.setFullYear(2021)
console.log(d)
console.log("\n")

//SetMonth
d.setMonth(0) //0-11 Jan-Dec
console.log(d)

d.setMonth(13) //11+2
console.log(d)
console.log("\n")

//SetDate
var da = new Date()
console.log(da)
da.setDate(21)
console.log(da)

da.setDate(38)  //1-31
console.log(da)  

console.log("\n")
console.log(d)
console.log(d.toString())


d.setHours(11)
d.setMinutes(4)
d.setSeconds(45)
d.setMilliseconds(600)

console.log(d.toString())

