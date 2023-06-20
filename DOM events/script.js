// var button = document.getElementsByTagName("button")[0];

// button.addEventlistener("mouseleave",function(){
//     console.log("click!!");


// })


// var button = document.getElementById("enter");
// var input = document.getElementById("input text");
// var ul = document.querySelector("ul");

// button.addEventListener("click",function(){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
//     ul.appendChild(li);


//     console.log("click is working");
// })

// var button = document.getElementById("enter");
// var  input = document.getElementById("input text");
// var ul = document.querySelector("ul");

// button.addEventListener("click",function(){
//     var li = Document.createElement("li");
//     li.appendChild(document.createTextNode("programming"));
//     ul.appendChild(li);
//     console.log("click workes");
// })


// var button = document.getElementById("enter");
// var input =document.getElementById("input text");
// var ul = document.querySelector("ul");

// button.addEventListener("click",function(){
//     console.log(input.value);
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
// })



// // ------if null no inlut will register----

// var button =document.getElementById("enter");
// var input = document.getElementById("input text");
// var ul = document.querySelector("ul");

// button.addEventListener("click",function(){
//   if(input.value.length > 0){
//     var li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);

//   }

// })


var button = document.getElementById("enter");
var input = document.getElementById("input text");
var ul = document.querySelector("ul");


function inputlength(){
    return input.value.length;
}

function createlistelement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addlistafterclick(){
    if (inputlength() > 0){
        createlistelement();
    }

}

function addlistafterkeypress(event){
    
        if (input.value.length > 0 && event.keycode === 13){
           createlistelement();
        }

}

button.addEventListener("click",addlistafterclick)
   
input.addEventListener("keypress",addlistafterkeypress)
   