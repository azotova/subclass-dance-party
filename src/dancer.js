// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps =timeBetweenSteps;
  this.linePosition = "1000px";
  this.step();
  this.setPosition(top, left);
  this.top = this.$node.css("top").substring(0,this.$node.css("top").length-2);
  this.left = this.$node.css("left").substring(0,this.$node.css("left").length-2);
  this.interact();
};

  makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    setTimeout( this.step.bind(this), this.timeBetweenSteps)
  };


  makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  makeDancer.prototype.lineUp = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var latitude = $("body").width() * Math.random();
    this.setPosition (this.linePosition, latitude);

  };

  makeDancer.prototype.interact = function () {
    var self=this;
    var n = 3;
    this.$node.on('click',(function (){
      var distances = [];
      for (var i=0;i<window.dancers.length;i++) {
        distances[i]=Math.pow(window.dancers[i].top-self.top,2)+Math.pow(window.dancers[i].left-self.left,2)
      };
      var distanceSorted= distances.slice().sort(function(a,b) {return a-b});
      for (var i = 0; i <=n; i++) {
        window.dancers[distances.indexOf(distanceSorted[i])].$node.css({border: "20px solid white"})
      }
    })
  )};




