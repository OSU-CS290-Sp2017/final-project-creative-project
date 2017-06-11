var addButton = document.getElementById("addbutton");
var removeButton = document.getElementById("removebutton");
var tableBody = document.getElementById("newinput");
var table = document.getElementsByTagName("table");

/*
<tr>
	 <td class="col1"><label for="addtionalimgs" class="name">Addtional Image URL: </label></td>
	 <td class="col2"><br><input type="url" class="col2" id="addtionalimgs" name="addtionalimgs" placeholder="Enter a URL"></input></br></td>
</tr>
*/

addbutton.addEventListener('click', function() {
	var tr = document.createElement("tr");

	var td1 = document.createElement("td");
	var td2 = document.createElement("td");

	td1.classList.add("col1");
	td2.classList.add("col2");

	var label = document.createElement("label");
	var textnode = document.createTextNode("Image");

	label.for = "addtionalimgs";
	label.classList.add("name");
	label.appendChild(textnode);

	td1.appendChild(label);
	var input = document.createElement("input");
	input.type = "url";
	input.classList.add("col2");
	input.id = "addtionalimgs";
	input.name = "addtionalimgs";
	input.placeholder = "Enter a URL";

	td2.appendChild(input);

	tr.appendChild(td1);
	tr.appendChild(td2);

	tableBody.after(tr);
})

removeButton.addEventListener('click', function(){
	if(table[0].rows.length > 4){
		table[0].deleteRow(4);
	}

