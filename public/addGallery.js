var button = document.getElementById("button");
var textfield = document.getElementById("imageurl1");
var list = document.getElementById("list");

button.addEventListener('click', function() {
	var value = textfield.value;
	if(value){
		var node = document.createElement("li");
		var textnode = document.createTextNode(value);
		node.appendChild(textnode);
		list.appendChild(node);
		textfield.value = '';
	}
	else{
		alert("Please enter a URL");
	}
})
