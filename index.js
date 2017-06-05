var img = document.getElementsByTagName('img');
var popups = document.getElementsByClassName('popup');


//Add hover listeners to each gallery card
for(var i = 0; i < img.length; i++){
  (function(popelem){
    img[i].onmouseover =  function(){
      popelem.style.display = 'block';
    };
  }) (popups[i]);

  (function(popelem){
  img[i].onmouseout =  function(){
      popelem.style.display = 'none';
    };
  }) (popups[i]);
}