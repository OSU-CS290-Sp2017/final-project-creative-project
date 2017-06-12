var main = document.getElementById('large-image');
var previewImages = document.getElementsByClassName("preview-small");


for(var i = 0; i < previewImages.length; i++){
	(function(item, item2){
		previewImages[i].onclick =  function(){
			item.src = item2.src;
		};
	}) (main, previewImages[i]);
}