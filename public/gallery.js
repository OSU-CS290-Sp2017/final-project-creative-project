var preview = document.getElementsByName('preview');
var otherimg = document.getElementsByClassName("preview-small");

var main_photo = document.getElementsByName("main-photo");

main_photo.onclick = function () {
   preview.src = main_photo.src;
};

for (var i = 0; i < otherimg.length; i++) {
   (function(main, pre){
      console.log(preview[i]);
    // 	preview[i].onclick =  function(){
    // 	  main.src = pre.src;
    // 	};
   }) (main_photo[0], preview[i]);
}
