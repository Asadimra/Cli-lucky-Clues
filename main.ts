#! /usr/bin/env node
import inquirer from "inquirer"
const random_number =Math.floor(Math.random()*6+1);
const answer = await inquirer.prompt([{
name:"user_guessed_number",
type:"number",
message:"Please Guess a Number between 1-6 : ",
}])
if (answer.user_guessed_number=== random_number ){
    console.log("conguralation you gussed  a right number: ");    
}
else {
    console.log("Oh Know you guessed wrong number: ");
    console.log("GAME OVER");
    
    
}
