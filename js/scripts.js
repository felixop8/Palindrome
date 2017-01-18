$(function(){
  $('form.blank').submit(function(event){
    event.preventDefault();


    var stringValue =$('input#palindrome').val();
    var splitReverseJoin = stringValue.split("").reverse().join('');

    if ( splitReverseJoin.toString().toUpperCase() === stringValue.toString().toUpperCase() ) {
      alert('It is definitively a palindrome word');
    } else {
      alert('I am afraid this is just a regular word')
    }
  });
});
