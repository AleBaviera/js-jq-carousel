$(document).ready(function(){

console.log('Ciaoooo');


$('.prev').click(goprev);


// funzione prev
function goprev(){
  console.log('goprev');
var items = $('.center img.active, .center .selected .here.active');
console.log(items);
if ($(items).hasClass('first')){
  $(items).removeClass('active');
  $('.last').addClass('active');

}
else{
  $(items).removeClass('active');
  $(items).prev().addClass('active');
  console.log(items);
}






}



$('.next').click(gonext);


// funzione prev
function gonext(){
  console.log('gonext');
var items = $('.center img.active, .center .selected .here.active');
console.log(items);
if ($(items).hasClass('last')){
  $(items).removeClass('active');
  $('.first').addClass('active');

}
else{
  $(items).removeClass('active');
  $(items).next().addClass('active');
  console.log(items);
}






}












});
