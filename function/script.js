//calling to many object using single function//

// function sing(song){
//     console.log(song);
// }

// sing("ahaaa");
// sing("wowww");
// sing("tatttta");


// function multiply(a , b){
//  return( a * b);
// }
// multiply (5,10);

//  function multiply(a ,b) {
//     if (a > 10|| b > 10) {
//         return "thats no hard";
//     } else {
//         return a*b;

//     }
//     }
//     multiply(5, 10);



//---------------//////////////////////////////////

//we can assign function as variables//
// var a =function(a ,b ) {
//     if (a > 10 || b > 10){
//         return "that too hard";
//     } else {
//         return a*b;
//     }
// }


function multiply(a ,b) {
    return a*b;
    
}
var total = multiply(4,5);
alert(total);