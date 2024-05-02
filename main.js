#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green("\n \t   Word Counter Project  -  By Merchantsons"));
console.log(chalk.red("♥".repeat(60)));
//inquirer input
let answers = await inquirer.prompt({ name: "setofword", type: "input", message: "Enter Set Of Words Here: →", });
//Get input in array with split and trim function.
let words = answers.setofword.trim().split(" ");
//Check & Print Words
console.log("☼".repeat(60));
console.log(chalk.bold("- Words In Array:"));
console.log(words);
console.log("☼".repeat(60));
console.log(chalk.bold(`- Total Word Count: → ${chalk.bold.redBright(words.length)}`));
console.log(chalk.red("♥".repeat(60)));
