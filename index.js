var img = document.getElementsByClassName('Gallery');
var backdrops = document.getElementsByClassName('card-backdrop');


//Add hover listeners to each gallery card
for(var i = 0; i < img.length; i++){
  (function(backdrop){
    img[i].onmouseover =  function(){
      backdrop.style.display = 'flex';
    };
  }) (backdrops[i]);

  (function(backdrop){
  img[i].onmouseout =  function(){
      backdrop.style.display = 'none';
    };
  }) (backdrops[i]);
}


