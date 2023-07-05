// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

///solutin///
let a = 'test';
const b = true;
const c = 789;
a = 'test2';

// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
//solution////
var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const{firstName,lastName,age,eyeColor} =person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};


///solution///
let a = 'test';
const b = true;
const c = 789;

const okObj = {
  a: a,
  b: b,
  c: c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

///solution///
const firstName = "ram";
const city = "barabanki";
const message = `hello + ${firstName} + "have i met you before? i think we met in " +${city} + "last summer no???"`;

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

///default argument
const isValidAge = (age = 10) => age;




// Symbol
// Create a symbol: "This is my first Symbol"

//solution///
const sym = Symbol('this is my first symbol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

////solution////

const whereAmI = (username,location) => {
    if(username && location){
        return "i am not lost";
    }else{
        return "i am totally lost!";
    }
}

