var main = document.getElementById("large-image");
var previewImages = document.getElementsByClassName("preview");
var link = document.getElementById("large-image-link");


for(var i = 0; i < previewImages.length; i++){
	(function(image1, imageLink, image2){
		previewImages[i].onclick =  function(){
			image1.src = image2.src;
			imageLink.href = image2.src
		};
	}) (main, link, previewImages[i]);
}