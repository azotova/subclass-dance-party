describe("jumpyDancer", function() {

  var jumpyDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    jumpyDancer = new JumpingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(jumpyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes it change colors", function() {
    sinon.spy(jumpyDancer.$node, 'toggleClass');
    jumpyDancer.step();
    expect(jumpyDancer.$node.toggleClass.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(jumpyDancer, "step");

      expect(jumpyDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); 
      clock.tick(timeBetweenSteps);

      expect(jumpyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(jumpyDancer.step.callCount).to.be.equal(2);
    });
  });
});
