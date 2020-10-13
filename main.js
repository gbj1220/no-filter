/******************
 * YOUR CODE HERE *
 ******************/
function onlyOdds(numbers) {
  const oddNumbers = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      oddNumbers.push(numbers[i])
    }
  }
  return oddNumbers
}

function onlyEvens(numbers) {
  const evenNumbers = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i])
    }
  }
  return evenNumbers
}

function shortNamesOnly(name) {
  superShort = []
  for (let i = 0; i < name.length; i++) {
    if (name[i].length < 7) {
      superShort.push(name[i])
    }
  }
return superShort
}

function sNames(names) {
  const capitalS = []
  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === 'S') {
    capitalS.push(names[i])
  }
}
  return capitalS
}



/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof sNames === 'undefined') {
  sNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  sNames,
}
