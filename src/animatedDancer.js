var makeAnimatedDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("animate");
  this.linePosition = "800px";
  this.mouse();
};

makeAnimatedDancer.prototype = Object.create(makeDancer.prototype);
makeAnimatedDancer.prototype.constructor = makeAnimatedDancer;
makeAnimatedDancer.prototype.step = function () {
  var flag=false;
  var self=this;
  setInterval( function () {
    if (!flag) {
      //styleSettings = {border: "green"}
      self.$node.css({border: "10px solid black"})
      flag = true;
    } else {
      self.$node.css({border:"10px solid white"})
      flag = false;
    }

  }, 2000);


};

makeAnimatedDancer.prototype.mouse = function () {
  var self=this;
  this.$node.on('mouseover',(function (){
    console.log("hi")
    self.setPosition("500px","500px");
  })
)};
