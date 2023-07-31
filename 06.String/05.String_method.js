var a = "Hello Everyone "
var b = "Eat that Frog"

//concatenation
console.log(a.concat(b))
console.log(a.concat(" ", b, " boooo"))
console.log(a + " boooo " + b)


console.log("\n")

//Uppercase Lowercase
console.log(a.toUpperCase())
console.log(a.toLowerCase())
//https://devdocs.io/javascript/global_objects/string/tolocalelowercase
//https://devdocs.io/javascript/global_objects/string/tolocaleuppercase
console.log(b.toUpperCase())
console.log(b.toLowerCase())

console.log("\n")



//toString
var x = new String('Hello world')
console.log(x ,"=> " +typeof(x))
console.log(x.toString(), "=> " + typeof ((x.toString())))
console.log("\n")


//trim
const greeting = '   Hello world!   '
console.log(greeting)
console.log(greeting.trim())
console.log(greeting.trimEnd())
console.log(greeting.trimStart())


console.log("\n")


//value0f() => The valueOf() method returns the primitive value of a String object.
var x1 =new String('Hello world')
console.log(x1)
console.log(x1.valueOf())



console.log("\n")

//SubStrings
//The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
var text = "Hello JavaScript Here is your BOSS"
console.log(text.substring(5))
console.log(text.substring(13,))
console.log(text.substring(1,5))
console.log(text.substring(0,1))
console.log(text.substring(1,0))
console.log(text.substring(8, 4)) // It starts at index 8 and extracts characters up to index 4 (exclusive). The start and end indices are swapped, and the method still extracts the substring from index 4 to index 8.



//The arguments of substring() represent the starting and ending indexes,
// while the arguments of substr() represent the starting index and
// the number of characters to include in the returned string.

//***/ Furthermore, substr() is considered a legacy feature in ECMAScript and could be removed from future versions, so it is best to avoid using it if possible.***

console.log("\n")
let text1 = 'Mozilla'
console.log(text1.substring(2,5))  // => "zil"
console.log(text1.substr(2,3))     // => "zil"




console.log("\n")
var aString = 'Mozilla';
console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a' Here, aString.substr(-1, 1) means "start at the last index (index -1) and extract 1 character." So, it will extract the last character from the string, which is 'a'.


console.log(aString.substr(1, -1));  // '' In this case, aString.substr(1, -1) means "start at index 1 and extract -1 characters." When the number of characters to extract is negative or zero, it will return an empty string ''.
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'

console.log(aString.substr(-20, 2)); // 'Mo Here, aString.substr(-20, 2) means "start at index -20 and extract 2 characters." Since the starting index is before the beginning of the string, it starts from the beginning of the string (index 0) and extracts the first two characters, which are 'Mo'



var str = "Assalamu Alaikum"
console.log(str.startsWith("A"))
console.log(str.startsWith("Assala"))
console.log(str.startsWith("sala"))
console.log(str.startsWith("sala",2))
console.log(str.startsWith("Ala", 9))

console.log("\n")


console.log(str.endsWith("Alaikum"))
console.log(str.endsWith("Ala", 12))//Assalamu Ala=12


// var character = str.charAt(index)
console.log(str.charAt(0))
console.log(str.charAt(4))
console.log(str.charAt(7))
console.log("Out of rane",str.charAt(457))


// str.indexOf(searchValue [, fromIndex])
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
console.log(`The index of the first "dog" from the beginning is `+paragraph.indexOf("dog")) //first occurance
console.log(`The index of the first "dog" from the beginning is `+paragraph.indexOf("dog",41)) //first occurance from index 41
console.log(`The index of the first "dog" from the beginning is `+paragraph.lastIndexOf("dog")) // last occurance
//The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.


console.log(String.raw`C:\Development\profile\aboutme.html`)
// console.log(String.raw"C:\Development\profile\aboutme.html") error
console.log(String.raw({raw: ['foo', 'bar', 'baz']}, 2 + 3, 'Java' + 'Script'))
console.log(String.raw`Hi\n${2+3}!`)




//str.repeat(count)
console.log(str.repeat(5))


// //str.split([separator[, limit]])
const strr = 'The quick brown fox ,jumps over the lazy dog.';
const words = strr.split(' ')
// const words = strr.split(',')
console.log(words)
console.log(words[2])


console.log("\n")


var x = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'

console.log(x.slice(31))
console.log(x.slice(4, 19))
console.log(x.slice(-4))
console.log(x.slice(-9, -5))


console.log(x.search("over"))
// var y = x.replace("over","brhind")
// console.log(y)
console.log(x.replace('dog', 'monkey'))
console.log(x.replaceAll('dog', 'monkey'))




// //str.includes(searchString[, position])
//The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
console.log(x.includes("brown"))
console.log(x.includes("jumps"))
console.log(x.includes("jumps",22))
console.log(x.includes("dog",22))

























// //The strike() method embeds a string in a <strike> tag: "<strike>str</strike>".
// // var worldString = 'Hello, world'; 

// // console.log(worldString.blink()); // <blink>Hello, world</blink> 
// // console.log(worldString.bold()); // <b>Hello, world</b> 
// // console.log(worldString.italics()); // <i>Hello, world</i> 
// // console.log(worldString.strike()); // <strike>Hello, world</strike>


// // // The sup() method embeds a string in a <sup> tag: "<sup>str</sup>".

// // var superText = 'superscript'
// // var subText = 'subscript'
// // console.log('This is what a ' + superText.sup() + ' looks like.')
// // console.log('This is what a ' + subText.sub() + ' looks like.')

