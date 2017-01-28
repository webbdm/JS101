// Objects

// var myCat = {

// 	tail: "long",
// 	age: 29,
// 	color: "blue",
// 	friends: ["zoe", "callan", "lauren"]
// }

// console.log("Age of cat: ", myCat.age);
// console.log("Color of cat: ",myCat["color"]);

// for (var myKey in myCat){

// 	console.log("myKey", myKey);
// 	console.log("values", myCat[myKey]);

// }

var nuggetElement = document.getElementById('nuggetShack')
var availElement = document.getElementById('availForPurchase');

function nuggetMaker(animal) {

	var myNugget = "breading " + animal + " breading";
	return myNugget;
}

function shackMaker(divLocation, divText){
	divLocation.innerHTML += divText;
}


var chickenNuggets = nuggetMaker("chicken");
shackMaker(availElement, chickenNuggets);

var lobsterNuggets = nuggetMaker("lobster");
shackMaker(availElement, lobsterNuggets);

var tablets = nuggetMaker("myComputer");
shackMaker(availElement, tablets);

var shackName = "McDougals";
shackMaker(nuggetElement, shackName);


// function myLooper(myArray) {

// 	for (var i = 0; i < myArray.length; i++) {
// 		console.log(myArray[i]);
// 	}

// }

// var animals = ["cats", "turtles", "fish", "bears", "tigers"];
// myLooper(animals);












