//returnFirstTwoDrivers()
//should return a new array containing the first two drivers from the passed-in array

//Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it. The assigned function should take one argument, an array containing the names of Scuber's drivers, and return a new array containing the first two drivers in the array:

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};


returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

//returnLastTwoDrivers()
//should return an array of the last two drivers

//Declare a variable with const that is assigned an anonymous function. The assigned function should take one argument, an array containing the names of Scuber's drivers, and return a new array containing the last two drivers in the array

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

//selectingDrivers
// has the `returnFirstTwoDrivers` function to as its first element
//has the `returnLastTwoDrivers` function to as its last element
//allows us to invoke either function from the array

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//createFareMultiplier()
//returns a function
// should multiply a given value using the created multiplier

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

//fareDoubler()
//is a function
//doubles fares

function fareDoubler(fare) {
        return fare * 2;
    };


const fare = 10;

//fareTripler()
//is a function
//triples fares

function fareTripler(fare) {
    return fare * 3;
};

//const fare = 12;

//selectDifferentDrivers(arrayOfDrivers, function)
//returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//returns the last two drivers when passed returnLastTwoDrivers() as the second argument

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
} 

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));