/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Type yor URL : ",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var qr_svg = qr.image(answers.URL, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("i_love_qr.png"));

    var svg_string = qr.imageSync("I love QR!", { type: "svg" });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
