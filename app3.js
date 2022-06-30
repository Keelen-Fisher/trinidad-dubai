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
    console.log("Let's Go to Dubai!");
    document.write("Let's Go to Dubai!!");
}
