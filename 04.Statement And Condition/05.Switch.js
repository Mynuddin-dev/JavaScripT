var date = new Date();
console.log(date)
var today = date.getDay();
console.log(today)

switch (today) {
    case 0:
        console.log("Today is Sunday")
        break
    case 1:
        console.log("Today is Monday")
        break
    case 2:
        console.log("Today is Tuesday")
        break
    case 3:
        console.log("Today is Wednesday")
        break
    case 4:
        console.log("Today is Thursday")
        break
    case 5:
        console.log("Today is Friday")
        break
    case 6:
        console.log("Today is Saturday")
        break
    default:
        console.log("Not a valid number")
}


// What happens if I forgot a break?
// If you forget a break then the script will run from the case where the criterion is met
// and will run the cases after that regardless if a criterion was met.


// case 4 and 5 share the same code block, and 0 and 6 share another code block:
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}


var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not.');
}


//more info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

/*
Can I put a default between cases?
Yes, you can! JavaScript will drop you back to the default if it can't find a match:


*/