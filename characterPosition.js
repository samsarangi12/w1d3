  var input = process.argv.slice(2);

  var inputStr = '';

  for (var i = 0; i < input.length; i++) {
    inputStr += input[i];
  }

  var outputObject = {};

  console.log(characterPosition(inputStr))

  function characterPosition(input) {

    for (var i = 0; i < input.length; i++) {
      if (!outputObject[input[i]]) {
        outputObject[input[i]] = [i]
      }
      else {
        outputObject[input[i]].push(i);
      }
    }
    return outputObject;
  }
