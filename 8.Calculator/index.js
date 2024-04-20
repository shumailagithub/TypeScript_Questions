#! /usr/bin/env node
//---------------------------------------------------Topic (Adition Calculator)----------------------------------------------------
//make addition calculator with the help of inquirer and 2 numbers.
import inquirer from "inquirer";
const user_ans = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Enter First Number"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter your second Number"
    },
    {
        name: "operator",
        type: "list",
        message: "Please Select Operation :",
        choices: ["Addition"]
    }
]);
if (user_ans.operator === "Addition") {
    console.log(user_ans.firstNumber + user_ans.secondNumber);
}
console.log(`The result of adding your given Numbers is : ${user_ans.firstNumber + user_ans.secondNumber}`);
