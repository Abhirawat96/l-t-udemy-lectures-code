// const player = "bobby";
// let experience = 100;
// let wizardlevelww = false;


// if(experience > 90){
//   let wizardlevelww = true;
//   console.log('inside',wizardlevelww);
// }
// console.log('outside',wizardlevelww);

//destructuring////

// const name = "john snow";
 
// const obj = {
//  [name]:'hello',
//  [1 + 2]:'hhihih'
// }

// // const player = obj.player;
// // const experience = obj.experience;
// // let wizardlevel = obj.wizardlevel;

// const{player,experience} = obj;
// let{wizardlevel} = obj;


// ///object properties///


//  const a = "simon";
//  const b = true;
//  const c ={};

//  const obj = {
//   a:a,
//   b:b,
//   c:c
//  }




//----------template strings---------//
const name = "sally";
const age = 34;
const pet = "horse";

const greetingbest = `hello ${name} you seem to be ${age-10}.what a lovely ${pet}`;


///default argument///
 
function greet(name='',age=30,pet='cat'){
  return`hello ${name} you seem to be ${age}and you have a lovely ${pet}`;
}

//symbol///

var syml = Symbol();
var syml2 = Symbol('foo');
let syml3 = Symbol('fooo');

///arrow function///
function add(a,b){
  return a+b;
}

const add2 = (a,b) => a + b;
