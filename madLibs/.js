$(document).ready(function(){
 
    function makeMadLib(e){
      e.preventDefault();
      var userInputPerson = $("#person").val();
      var userInputNoun = $("#noun").val();
      var userInputAdjective = $("#adjective").val();
    
  
     
  $("#story").append(userInputPerson + " really loves " + userInputAdjective + " " + userInputNoun + "!");
    }
    $("#lib-button").on("click", function(e) {
       makeMadLib(e)
  });
  
    });
