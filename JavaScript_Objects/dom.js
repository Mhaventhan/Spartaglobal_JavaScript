// Get elemnt by id
var wrapperDiv = document.getElementById("wrapper");
wrapperDiv.style.backgroundColor = "lightblue";

// Get element by tagname
var lis = document.getElementsByTagName("li");
lis[1].innerHTML = "I'm a Li and I've changed";
// querySelector
var selected = document.querySelectorAll("li.selected");
for (var i = 0; i < selected.length; i++) {
  selected[i].style.color = "red";
}

var ptag = document.createElement('p');
ptag.innerHTML = "A brand new ptag";
document.body.appendChild(ptag);

var ul = document.getElementById("list");
var listItem = document.createElement('li');
listItem.innerHTML = 'New list item 35';

ul.appendChild(listItem);

  // Turn the every other list items a different colour
for (var i = 0; i < lis.length; i++) {
  var className = i % 2 == 0 ? "even":"";
  var li = lis[i]


  li.className = className;
}

var countSpan = document.getElementById('count');
countSpan.innerHTML = lis.length;
