var forme = document.getElementById('forme');

// var form = document.getElementById('form');

window.onscroll = function(){
var scroll = window.pageYOffset;
  forme.style.left = -scroll *0.50+ 'px';
  cloud.style.left = -scroll *0.20+ 'px';
  console.log(scroll);
}
