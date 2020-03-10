const num1 = Number(prompt("Please enter a number"));

const doubled = num1 * 2;

const output = document.getElementById('ouput')

const ouputStr = `The doubled is ${doubled}`

output.innerHTML = '<h2>' + outputStr + '</h2>'