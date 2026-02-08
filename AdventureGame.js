const readline = require("readline-sync");
let playername="";
let health= 100;
let gold = 20;
let location = "village";
let gameRunning = true;
let inventory = [];
readline.question("What's your name Buddy: ")
console.log("Welcome to the game " + playername + "!")
console.log("-----------------------------------")
console.log("you have initial gold of : Gold=" + gold)

