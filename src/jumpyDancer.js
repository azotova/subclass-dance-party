var JumpingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("jumpy");
  this.linePosition = "400px";

};

JumpingDancer.prototype = Object.create(Dancer.prototype);
JumpingDancer.prototype.constructor = JumpingDancer;
JumpingDancer.prototype.oldStep = function () {
  return Dancer.prototype.step.call(this);
};
JumpingDancer.prototype.step = function () {

  this.oldStep();
  this.$node.toggleClass('jump');

};
