//import generateName from  "sillyname"; 
//import superheroes from "superheroes";
import inquirer from 'inquirer';  
import qr from "qr-image"; 
import fs from "fs";
//var qr = require('qr-image');
/*
//var generateName =  require("sillyname");
var sillyName  = generateName();
 var randomSuperhero = superheroes.random();
console.log(`My name is ${sillyName} .`); 
console.log(`i am ${randomSuperhero}.`); */


inquirer
  .prompt([
    /* Pass your questions in here */ 
    {
    message : "Type in your url: " ,
     name: "URL",  
     
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!  
    
    const url = answers.URL; 
    
var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });