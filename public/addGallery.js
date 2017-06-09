var temp = document.getElementsByClassName("imageurl0");
var button = temp[0];

console.log(button);
console.log(temp);

button.on('keyup', function (e) {
    if (e.keyCode == 13) {
    	console.log("test");
    }
});