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
alert("Please enter the right input")

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
function trip(){
  var distance = parseFloat(prompt("Enter the distance"));
    // fuel is for miles per gallon
    var fuel = parseFloat(prompt("Enter fuel efficiency (mpg)"));
    var costPerGallon = parseFloat(prompt("Enter price per gallon"));
    var speed = parseFloat(prompt("Enter speed"));
    var time = distance/speed;
    var price;
    if (speed > 60 ) {
  // if the speed is over 60 reduce mpg by 2
    var mpg = (speed % 60 * 2);
    var reduced_mpg = fuel -  mpg;
    price = (distance/reduced_mpg)*costPerGallon;
    }

    else {
        price = (distance/fuel)*costPerGallon;
      }
      alert("The price is £ " + price +"\n" + "duration of the trip " + time )
}
