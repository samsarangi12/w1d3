var input = process.argv.slice(2);
var inputStr = '';
for (var i = 0; i < input.length; i++) {
  inputStr += input[i]
}

var outputObject = {};

console.log(countLetters(inputStr));

function countLetters(input) {
  for (var i = 0; i < input.length; i++) {
    if (outputObject[input[i]] === undefined) {
      outputObject[input[i]] = 1;
    }
    else {
      outputObject[input[i]] += 1;
    }
  }
  return outputObject;
}
