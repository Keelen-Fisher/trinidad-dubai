
// Asking the user their name and continue to next js file.
//function 1
let usersName = prompt("Welcome! before we start, what's your name? ");

if (userName != " && userName != null"){
     document.write('Welcome to you next trip' + userName + '!');
}

else{
     prompt("let's try that again, what's your name?")
}






//function 2
let userResponse = prompt("Does touching the beautiful sands of Trinidad, or driving fast in the Streets of Dubai sound good to you? Enter Yes to Continue, or No to continue!")
console.log(userResponse);
let text = document.getElementById("input")
let response = document.createTextNode(userResponse)
if (userResponse.toLowerCase == "yes")
{
    // text.appendChild( 'Lets Go ' + response + '!!');
    document.write('Lets Go ' + usersName + '!!');
}

else
{
    // text.appendChild('Lets Still Plan Your Next Trip ' + response + '!!')
    document.write('Lets Still Plan Your Next Trip ' + usersName + '!!');
}




//function 3
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



