var makeJumpingDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("jumpy");
  this.linePosition = "50%";

};

makeJumpingDancer.prototype = Object.create(makeDancer.prototype);
makeJumpingDancer.prototype.constructor = makeJumpingDancer;
makeJumpingDancer.prototype.oldStep = function () {
  return makeDancer.prototype.step.call(this);
};
makeJumpingDancer.prototype.step = function () {

  this.oldStep();
  this.$node.toggleClass('jump');

};

