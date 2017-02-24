//user interface
$(document).ready(function(){
  $("form#Ping-Pong").submit(function(event){
    var userInput = parseInt($("input#userInput").val());
      var result = pingpong(userInput);
      $("#result").text(result);
         event.preventDefault();
  });
});
//Business logic
function pingpong(userInput){
  var game =[];
for (x=1; x <= 1000; x++){
    if( x % 3 === 0 ){ console.log();
        game.push("ping");
    }
    if( x % 5 === 0 ){ console.log();
        game.push("pong");
    }
    if( ( x % 3 !== 0 ) && ( x % 5 !==0 ) ){  console.log();
       game.push(pingpong);
    }
    // return game;
    $("#result").show();
  }
}
