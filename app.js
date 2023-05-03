
// Asking the user their name and continue to next js file.
//function 1
function triniName() {
     /* This line of code is prompting the user to enter their name and storing their input in the variable
     `usersName`. */
     let usersName = prompt("Welcome! before we start, what's your name? ");

     /* This `if` statement is checking if the `usersName` variable is not equal to an empty string (`""`)
     AND is not equal to `null`. If this condition is true, it will write a welcome message to the
     document with the user's name. If the condition is false, it will prompt the user to enter their
     name again. */
     if (usersName != " && userName != null") {
         /* `document.write('Welcome to you next trip ' + usersName + '!');` is writing a welcome
         message to the document with the user's name concatenated to the end of the message. This is shown as a pop up in your local host website. */
          document.write('Welcome to you next trip ' + usersName + '!');
     }

     else {
          prompt("let's try that again, what's your name?")
     }
     return usersName
}


//function 2

function triniInput() {
     let userResponse = prompt("Does touching the beautiful sands of Trinidad, or driving fast in the Streets of Dubai sound good to you? Enter Yes to Continue, or No to continue!")
     console.log(userResponse);
     // let text = document.getElementById("input")
     // let response = document.createTextNode(userResponse)
     if (userResponse.toLowerCase == "Yes") {
          // text.appendChild( 'Lets Go ' + response + '!!');
          //document.write('Lets Go ' + triniName() + '!!');
     }

     else {
          // text.appendChild('Lets Still Plan Your Next Trip ' + response + '!!')
          //document.write('Lets Still Plan Your Next Trip ' + triniName() + '!!');
     }
     // return userResponse
}


//function 3

function triniPrefer() {
     let usersinput = prompt(" You came to the right place! So do you prefer the island or the city?");

     console.log(usersinput);

     if (usersinput.toLowerCase() == "island") {
          console.log("Let's go to Trinidad!!");
          document.write("Let's Go to Trinidad!!");
     }

     else if (usersinput.toLowerCase() == "iceland") {
          console.log("Go over to Xavier's page for more info!");
          document.write("Go over to Xavier's page for more info!");
     }



     else {
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
function showPic() {
     alert("PSSSST! Listen up, you could use some relaxation.");
     userSee = prompt("Would you agree?");

     if (userSee.toLowerCase == "yes") {
          console.log("Perfect! I'll show you");

     }

     else {
          document.write("Aw man :( you're missing out!")
     }

     const userPic = prompt("I;m here for you! What would you rank you stress 1-5 (1 being the lowest stress, and 5 being the highest)? ");

     for (let i = 0; i <= 5; i++) {

          if (userPic == 1) {
               alert("Oh you need this more than I do!! Lets get started then.");
          }


          else if (userPic == 2) {
               alert("We're on the same boat! Let's see what we can do for you.");
          }

          else if (userPic == 3) {
               alert("Okay, not doing bad but you can feel better! Heres what we have for you! ")
          }

          else if (userPic == 4) {
               alert("Good! You should still take a look at what we've got for you! ")
          }

          else if (userPic == 5) {
               alert("Look at you, being all happy and positive!!! Why not check out how you can be happier? ")
          }

          else {
               alert("All good, maybe we can still find something for you to enjoy: ")
          }
          return userPic
     }
}

