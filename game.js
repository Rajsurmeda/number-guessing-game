#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer_1.default.prompt([{ name: "userguessedNumber",
        type: "number",
        message: "please guess a number between 1-6",
    },
]);
if (answer.userguessedNumber === randomNumber) {
    console.log("conguratulation you have guessed right number");
}
else {
    console.log("you guessed wrong number");
}
