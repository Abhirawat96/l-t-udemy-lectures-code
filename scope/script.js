// root scope (window)

var fun = 5;
function funfunction(){
  var fun = "hello";
  console.log(1,fun);
}



function funnyfunction(){
  var fun = "bye";
  console.log(2,fun);

}

function funerfunction(){
  var fun = "tata";
  console.log(3,fun);


}


console.log("window",fun);
funfunction();
funnyfunction();
funerfunction();