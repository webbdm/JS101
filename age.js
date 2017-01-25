// 1. How many hours are in a year

var hoursInDay = 24;

var daysInYear = 365;

var amountOfHours = (daysInYear * hoursInDay);

console.log("Hours in a year: ", amountOfHours);

// 2. How many minutes are in a decade

var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerYear = 365;
var yearsPerDecade = 10;
console.log("minutes in a decade: ", minutesPerHour*hoursPerDay*daysPerYear*yearsPerDecade);


// 3. How many seconds old they are

var personAgeInYears = 27;
var secondsPerMinute = 60;
var secondsOld = personAgeInYears*daysPerYear*hoursPerDay*minutesPerHour*secondsPerMinute;

console.log("how many seconds old ", secondsOld);



// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"


if (personAgeInYears > 80){
	console.log("I'm old");
} else{
	console.log("I'm young");
}

