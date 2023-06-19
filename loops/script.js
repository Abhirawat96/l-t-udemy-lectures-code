var todos = [
    "clean room",
    "brush teeth",
    "go to work",
    "studies",
    "eat healthy",
];
var todosimportant = [
    "clean room!",
    "brush teeth!",
    "go to work!",
    "studies!",
    "eat healthy!",
];



// // for(var i=0; i < todos.length;i++){
// //     // console.log(todos[i] + "!");
// //     // todos[i] = todos[i] + "!";
// //     todos.pop();

// // }


var todosLength = todos.length;
// for(var i=0;i < todosLength; i++){
//    console.log(i);
// }

function logtodos(todo,i){
    console.log(todo,i);
}
todos.forEach(logtodos);
todosimportant.forEach(logtodos);


// var counterone = 10;
// while(counterone > 0) {
//     console.log("while",counterone);
//     counterone--;
// }


// var counterTwo = 10
// do {
//     console.log("do while",counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);

