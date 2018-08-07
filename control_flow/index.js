// if the money in the pocket less £10 go home otherwise have a drink
var money_in_my_pocket = parseFloat(prompt("Home much money do you have"));
var drinks_drunk = parseFloat(prompt("How many have you had already?"));
var price_of_crisp = parseFloat(prompt("How much are those crisp?"));
if (money_in_my_pocket > 10) && drinks_drunk <3){
  console.log("Another drink please");
}

else if (money_in_my_pocket > 5) || price_of_crisp == 0){
  console.log("Just crisps then");
}
else {
  console.log("I'm off home");
}
// if version
var name = "tim";
if (name == "bob"){
  console.log("hi bob");
}
else if (name == "tim") {
  console.log("hi time");

}
else if (name == "steve") {
  console.log("hi steve");

}
// Switch version
 switch (name) {
  case "bob":
    console.log("hi bob");
    break;
  case "tim":
    console.log("hi tim");
    break;
  case "steve":
    console.log("hi Steve");
    break;
  default:
    console.log("Hi default person");
}
