var database = [
    {
        username: "ander",
        password: "supersecret" 
    },
    {
        username: "tom",
        password: "1111"
    },
    {
        username: "jerry",
        password: "0000"
    },
];


var newsfeed = [
    {
        username: "bobby",
        timeline: "so are you bobby"
    },

    {
        username: "tobby",
        timeline: "are you a tobby boy"
    },

    {
        username: "max",
        timeline: "hey are you max mad"
    },
];

function isUserValid(username,password){
    for (var i=0; i < database.length; i++){
        if(database[i].username === username &&
            database[i].password === password){
                return true;

            }
    }
    return false;

}

function signIn(username, password){
    // console.log(isUserValid(username, password));
    // for(var i=0;i = database.length;i++){
        // if(database[i].username===username &&
        //     database[i].password === password ){
        //         console.log(newsfeed);
        if(isUserValid(username, password)){
            console.log(newsfeed);
            } else {
                alert("sorry wrong username and password");
            }
    }
var usernamePrompt = prompt("what is your username?");
var passwordPromot = prompt("what is your password?");

signIn(usernamePrompt, passwordPromot);

