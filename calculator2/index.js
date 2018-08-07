// Prompt to ask the user to select the type of Calculator
var calculator_type = prompt("Please choose a one of the calculator options: 1) Basic, 2) Advanced 3) BMI and 4) Trip Calculator");

switch (calculator_type) {
  case "1":
    basic();
    break;
  case "2":
    advanced();
    break;
  case "3":
    BMI();
    break;
  case "4":
    Trip_cal();
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

// function to a BMI calculator either in metric or imperial
function BMI(){
  var BMI_Option = prompt("1)Metric or 2)Imperial")

  if (BMI_Option == 1) {
    var height = parseFloat(prompt("Enter height in cm:"))
    var weight = parseFloat(prompt("Enter weight in kg:"))
    var height2 = (height/100);
    alert(weight/(height2 * height2));

  }

  else {

    var height= parseFloat(prompt("Enter height in inches:"))
    var weight = parseFloat(prompt("Enter weight in lbs:"))

    var BMI_Imperial = (weight /(height * height)) * 703;

    alert(BMI_Imperial);
  }
}

// function to a Trip calculator
function Trip_cal(){
  var trip_info_array = prompt("Enter your distance in miles","Enter MPG","Enter cost per gallon in £:", "Enter your speed in mph");

  var distance = trip_info_array[0];
  var miles_per_gallon = trip_info_array[1];
  var cost_per_gallon = trip_info_array[2];
  var miles_per_hour = trip_info_array[3];


  }

}
