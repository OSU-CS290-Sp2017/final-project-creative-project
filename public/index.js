var img = document.getElementsByClassName('Gallery');
var backdrops = document.getElementsByClassName('card-backdrop');


//Add hover listeners to each gallery card
for(var i = 0; i < img.length; i++){
  (function(backdrop){
	img[i].onmouseover =  function(){
	  backdrop.style.backgroundColor = 'rgba(59, 55, 56, 0.70)';
	  backdrop.style.color = 'rgba(255,255,255,1)'
	};
  }) (backdrops[i]);

  (function(backdrop){
  img[i].onmouseout =  function(){
	  backdrop.style.backgroundColor = 'rgba(59, 55, 56, 0)';
	  backdrop.style.color = 'rgba(255,255,255,0)'
	};
  }) (backdrops[i]);
}
