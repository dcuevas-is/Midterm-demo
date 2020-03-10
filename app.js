const num1 = prompt('Please enter a number')

const doubled = num1 * 2

const outputStr = `The doubled is ${doubled}`

const output = document.getElementById('output')
output.innerHTML = '<h2>' + outputStr + '</h2>'