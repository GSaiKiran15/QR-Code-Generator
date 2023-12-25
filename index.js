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
