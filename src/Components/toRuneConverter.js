//import React from 'react';
//don't know if we need react to export a js function.

//const futhark = ["ᚠ", "ᚢ", "ᚦ", "ᚬ", "ᚱ", "ᚴ", "ᚼ", "ᚾ", "ᛁ", "ᛅ", "ᛋ", "ᛏ", "ᛒ", "ᛘ", "ᛚ", "ᛦ"];
const convertString = (inputString) => {
  const inputArray = inputString.split('');
  const outputString = inputArray.map(convertRune);
  return outputString;
}

const convertRune = (inputChar) => {
  const inputCase = inputChar.toLowerCase();
  let output = "";

  switch (inputCase) {
    case " ":
      output = " ";
      break;

      case ".":
        output = <br/>;
        break;

    case "a":
      output = "ᚬ";
      break;

    case "b":
      output = "ᛒ";
      break;
    case "c":
      output = "ᚴ";
      break;

    case "d":
      output = "ᛏ";
      break;

    case "e":
      output = "ᛅ";
      break;

    case "f":
      output = "ᚠ";
      break;

    case "g":
      output = "ᚴ";
      break;

    case "h":
      output = "ᚼ";
      break;

    case "i":
      output = "ᛁ";
      break;

    case "j":
      output = "ᛁ";
      break;

    case "k":
      output = "ᚴ";
      break;

    case "l":
      output = "ᛚ";
      break;

    case "m":
      output = "ᛘ";
      break;

    case "n":
      output = "ᚾ";
      break;

    case "o":
      output = "ᚢ";
      break;

    case "p":
      output = "ᛒ";
      break;

    case "q":
      output = "ᚴ";
      break;

    case "r":
      output = "ᚱ";
      break;

    case "s":
      output = "ᛋ";
      break;

    case "t":
      output = "ᛏ";
      break;

    case "u":
      output = "ᚢ";
      break;

    case "v":
      output = "ᚢ";
      break;

    case "w":
      output = "ᚢ";
      break;

    case "x":
      output = "ᚴᛋ";
      break;

    case "y":
      output = "ᚢ";
      break;

    case "z":
      output = "ᛋ";
      break;

    case "æ":
      output = "ᛅ";
      break;

    case "ø":
      output = "ᚢ";
      break;

    case "å":
      output = "ᚬ";
      break;

    case "þ":
      output = "ᚦ";
      break;

    case "ð":
      output = "ᚦ";
      break;



    default:
    output = null;

  }

  return output;
};


export default convertString;
