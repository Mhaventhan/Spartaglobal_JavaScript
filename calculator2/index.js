// Prompt to ask the user to select the type of Calculator
var calculator_type = prompt("Please choose a one of the calculator options: 1) Basic, 2) Advanced 3) BMI and 4) Trip Calculator");

switch (calculator_type) {
  case "1":
    basic();
    break;
  case "2":
    advanced();
    break;

  default:

}



// function to a basic calculator once the user selects option 1
function basic() {
  var number1 = parseFloat(prompt("Enter first number:"));
  var operator = prompt("Enter a operator:");
  var number2 = parseFloat(prompt("Enter second number:"));

  if (operator == "+")
{
  alert(number1 + number2);
  }

if (operator == "-")
{
  alert(number1 - number2);
}
if (operator == "*")
{
  alert(number1 * number2);
}
if (operator == "/") {
  alert(number1 / number2);
}
}
// function to a Advanced calculator once the user selects option 2
function advanced() {
  var operator = prompt("Enter 1) Power or 2) Square root:");

  if (operator == 1) {
    var number1 = parseFloat(prompt("Enter first number:"));
    var number2 = parseFloat(prompt("Enter second number:"));
    alert(Math.pow(number1,number2));

  }

  else {
    var number = parseFloat(prompt("Enter a number:"))
    alert(Math.sqrt(number));
  }


}