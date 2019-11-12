function changeVocals(str) {
  //code di sini
  var newStr = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        newStr += "b";
        break;
      case "A":
        newStr += "A";
        break;
      case "i":
        newStr += "j";
        break;
      case "I":
        newStr += "J";
        break;
      case "u":
        newStr += "v";
        break;
      case "U":
        newStr += "V";
        break;
      case "e":
        newStr += "f";
        break;
      case "E":
        newStr += "F";
        break;
      case "o":
        newStr += "p";
        break;
      case "O":
        newStr += "P";
        break;
      default:
        newStr += str[i];
        break;
    }
  }
  return newStr;
}

function reverseWord(str) {
  //code di sini
  let kata = changeVocals(str);
  let newWord = "";
  for (var j = kata.length - 1; j >= 0; j--) {
    newWord += kata[j];
  }
  return newWord;
}

function setLowerUpperCase(str) {
  //code di sini
  let kata = reverseWord(str);
  let newWord = "";
  for (let i = 0; i < kata.length; i++) {
    if (kata[i] === kata[i].toLowerCase()) {
      newWord += kata[i].toUpperCase();
    } else {
      newWord += kata[i].toLowerCase();
    }
  }
  return newWord;
}

function removeSpaces(str) {
  //code di sini
  let kata = setLowerUpperCase(str);
  let newWord = "";
  for (let i = 0; i < kata.length; i++) {
    if (kata[i] !== " ") {
      newWord += kata[i];
    }
  }
  return newWord;
}

function passwordGenerator(name) {
  //code di sini
  let newWord = removeSpaces(name);
  return newWord;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
