var AnimatedDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("animate");
  this.linePosition = "800px";
  this.mouse();
};

AnimatedDancer.prototype = Object.create(Dancer.prototype);
AnimatedDancer.prototype.constructor = AnimatedDancer;

AnimatedDancer.prototype.step = function () {
  var flag=false;
  var self=this;
  setInterval( function () {

    if (!flag) {
      self.$node.css({border: "10px solid black"})
      flag = true;
    } else {
      self.$node.css({border:"10px solid white"})
      flag = false;
    }

  }, 2000);


};

AnimatedDancer.prototype.mouse = function () {
  var self=this;
  this.$node.on('mouseover',(function (){
    self.setPosition("500px","500px");
  })
)};
