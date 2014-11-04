$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", this, function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineUp").on("click", function(event){
    for (var i = 0; i <window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

});

