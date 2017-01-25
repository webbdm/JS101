//switch statement

// var day = "Friday";

// switch(day){
// 	case "Monday":
// 		console.log("Boooooooo");
// 	case  "Friday":
// 		console.log("PARTAY");
// 		break;
// 	default:
// 		console.log("not Monday");
// }

var fruit = ["cherries", "apples", "bananas"];
var fruitString = fruit.join(" cats ")
console.log("fruitString", fruitString);

var catColors = 'green,red,yellow,black';
var catColorsArray = catColors.split(",");

var reverseFruit = fruit.reverse;
console.log("reverseFruit", reverseFruit);

var alphaFruit = fruit.sort();
console.log("alphaFruit", alphaFruit);

var nums = [9,6,8,2,4,11,66];
var numSort = nums.sort(
	function(a,b){
	  return a-b;
	 }
	);
	console.log("numSort", numSort);

var mixed = ['r', 'm', 9, 3];
console.log("???", mixed.sort());

var animals = ["cats", "turtles", "fish", "bears", "tigers"];
console.log("bananas index", animals.indexOf("fish"));

var animals2 = animals.slice(2,4);
console.log("animals2", animals2);

animals.splice(1, 1);

console.log("no turtles", animals)

var colors = ["red", "blue", "gold", "pink", "orange"];


//sort, reverse, and make it a string

var finalAnswer = colors.sort().reverse().join(" cat ")
console.log(finalAnswer);