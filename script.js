var option = prompt("Which room would you choose to pack up first?");

if (option == null || option == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "The " + option + " is a great choice! Thank you for your help.";
}

alert(txt);


var movingList = document.getElementById("list");

console.log(movingList.childNodes.length);


var movingListTag = document.getElementsByTagName("li");

console.log ("Number of li links: "+ movingListTag.length);


var motivation = document.createElement("p");

var motivationalText = document.createTextNode("ALL PACKED UP!");

movingList.appendChild(motivation);

motivation.appendChild(motivationalText);
