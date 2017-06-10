var button = document.getElementById("button");
var table = document.getElementById("newinput");

/*
<tr>
	 <td class="col1"><label for="addtionalimgs" class="name">Addtional Image URL: </label></td>
	 <td class="col2"><br><input type="url" class="col2" id="addtionalimgs" name="addtionalimgs" placeholder="Enter a URL"></input></br></td>
</tr>
*/

button.addEventListener('click', function() {
	var tr = document.createElement("tr");

	var td1 = document.createElement("td");
	var td2 = document.createElement("td");

	td1.classList.add("col1");
	td2.classList.add("col2");

	var label = document.createElement("label");
	label.for = "addtionalimgs";
	label.classList.add("name");
	label.textfield = "Addtional Image URL: ";

	td1.appendChild(label);

	var br = document.createElement("br");
	var input = document.createElement("input");
	input.type = "url";
	input.classList.add("col2");
	input.id = "addtionalimgs";
	input.name = "addtionalimgs";
	input.placeholder = "Enter a URL";

	br.appendChild(input);
	td2.appendChild(br);

	tr.appendChild(td1);
	tr.appendChild(td2);

	table.appendChild(tr);
})
