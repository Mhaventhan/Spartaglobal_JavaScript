// Scope is about what things are availble to call
// Code can see out but can't see in
// var outsideVariable = 5;
//
// function doSomething() {
//   console.log(outsideVariable);
//
// }
//
// doSomething();

// function doSomething() {
//   var insideVeriable = 5;
//
// }
//
// doSomething();
// console.log(insideVeriable);

// function firstFunction() {
//   console.log("I'm in the first function");
//
// }
//
// function secondFunction() {
//   firstFunction();
//   console.log("I'm the secondFunction");
//
// }
// secondFunction();

// nested function

// function joinStringAndPrint(string1,string2) {
//   var newString = string1 + string2;
//
//   function printString(string) {
//     console.log(string);
//
//     // q3
//     console.log(newString);
//
//     console.log(string1+string2);
//
//
//   }
//   printString(newString);
//   return newString;
//
//
// }
//
// var string1 = "hello, ";
// var string2 = "world";
// joinStringAndPrint(string1, string2);
// // q1-
// printString("run from outside joinString")
//
// // q2 -
// passing functions as variables
// function sayHello() {
//   console.log("Hello");
//
// }
//
// function funcaller(functionToRun) {
//   functionToRun()
//
// }
//
// funcaller(sayHello);

// Declare
// function onTimerComplete(){
//   console.log("timer finished");
// }
//
// setTimeout(onTimerComplete,3000);

// counter
// function createCounter(){
//   var total = 0;
//
//   return function(){
//     total++
//     return total
//   }
// }
//
// var counter = createCounter();
// counter();
// counter();
// counter();
//
// var total = counter();
// console.log(total);
for (var i = 0; i < 10; i++) {
  setTimeout((function(j) {
    console.log(j)

  })(i), (i*1000));

}
