describe("animatedDancer", function() {

  var animatedDancer;
  var timeBetweenSteps =1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    animatedDancer = new AnimatedDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(animatedDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node change colors", function() {
    sinon.spy(animatedDancer.$node, 'css');
    animatedDancer.step();
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    expect(animatedDancer.$node.css.called).to.be.true;
  });

  describe("dance", function(){
    it("should change CSS at least once per every two seconds", function(){
      sinon.spy(animatedDancer.$node, 'css');
      expect(animatedDancer.$node.css.callCount).to.be.equal(0);
      // animatedDancer.step();


      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...


      expect(animatedDancer.$node.css.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(animatedDancer.$node.css.callCount).to.be.equal(2);
    });
  });
});
