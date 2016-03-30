$(document).ready(function(){
  $(".groceryList").submit(function(event){
    // var produceInput = $("#produce").val();
    // var bakeryInput = $("#bakery").val();
    // var meatInput = $("#meat").val();
    // var softDrinksInput= $("#softDrinks").val();
    // var alcoholInput= $("#alcohol").val();
    // var frozenInput= $("#frozen").val();
    // var cerealInput= $("#cereal").val();

 var userInput = ['produce', 'bakery', 'meat', 'softDrinks', 'alcohol', 'frozen', 'cereal'];
  var buy= [];
  for (i=0; i <= userInput.length ; i++) {
    var input = $("#" + userInput).val();
  $("#item1").append(input);
  }







  event.preventDefault();
  });
});
