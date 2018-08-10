document.addEventListener("DOMContentLoaded",function () {
  var myButton = document.getElementById('myButton');
  console.log(myButton);

  myButton.addEventListener("click",handclicked)
  function handclicked() {
    console.log("Button was clicked");

  }
  var myForm = document.getElementById('myForm');
  var name;
  myForm.addEventListener('submit',function(event) {
    event.preventDefault();
  var firstnamefield =
  document.getElementById('firstname');
  // console.log(firstnamefield);

  if (!firstnamefield.value) {
    console.log(firstnamefield);
    firstnamefield.style.backgroundColor = 'lightblue';
  }else {
    name = firstnamefield.value;
    console.log(name);
  }
})
 var div1 = document.getElementById('div1')
 var div2 = document.getElementById('div2')
 var div3 = document.getElementById('div3')

 div1.addEventListener('click',function (event) {
   event.stopPropagation();
   console.log('div1 was clicked');

 })
 div2.addEventListener('click',function (event) {
   event.stopPropagation();
   console.log('div2 was clicked');


 })
 div3.addEventListener('click',function (event) {
   event.stopPropagation();
   console.log('div3 was clicked');


 })
});
