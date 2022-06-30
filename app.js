
// Asking the user their name and continue to next js file.
//function 1
function triniName(){
let usersName = prompt("Welcome! before we start, what's your name? ");

if (usersName != " && userName != null"){
     document.write('Welcome to you next trip ' + usersName + '!');
}

else{
     prompt("let's try that again, what's your name?")
}
 return usersName
}


//function 2

function triniInput(){
let userResponse = prompt("Does touching the beautiful sands of Trinidad, or driving fast in the Streets of Dubai sound good to you? Enter Yes to Continue, or No to continue!")
console.log(userResponse);
// let text = document.getElementById("input")
// let response = document.createTextNode(userResponse)
if (userResponse.toLowerCase == "Yes")
{
    // text.appendChild( 'Lets Go ' + response + '!!');
    //document.write('Lets Go ' + triniName() + '!!');
}

else
{
    // text.appendChild('Lets Still Plan Your Next Trip ' + response + '!!')
    //document.write('Lets Still Plan Your Next Trip ' + triniName() + '!!');
}
// return userResponse
}


//function 3

function triniPrefer(){
let usersinput = prompt(" You came to the right place! So do you prefer the island or the city?");

console.log(usersinput);

if (usersinput.toLowerCase() == "island")
{
console.log("Let's go to Trinidad!!");
document.write("Let's Go to Trinidad!!");
}

else if (usersinput.toLowerCase() == "iceland")
{
    console.log("Go over to Xavier's page for more info!");
    document.write("Go over to Xavier's page for more info!" ); 
}



else 
{
    let usersinput2
    console.log("Let's Go to Dubai!");
    document.write("Let's Go to Dubai!!");
}

// return usersinput
}

// Calling all functions 
// triniName();
// triniInput();
// triniPrefer();



// Structure of a while loop

// condition // code block 
//while () {}


//
function showPic(){
     alert("PSSSST! I've got this funny pick for you");
     userSee = prompt("You wanna see it?");

     if(userSee == "yes"){
          console.log("Perfect! I'll show you");

     }

     else{
          document.write("Aw man :( you're missing out!")
     }

    const userPic = prompt("Awesome! how many times do you want to see it?");

    for(let i = 0; i < userPic; i++){
     document.write("<img src='CodingMeme.png' style='width:300px; margin=20px'/>")

    }
}

