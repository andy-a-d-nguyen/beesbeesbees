var HoneyMakerBee = function() {

  // bind this to Bee so Bee will operate on new instance of HoneyMakerBee
  // bind Bee's this to HoneyMakerBee's this
  Bee.call(this);

  this.age = 10;

  this.job = 'make honey';

  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {

  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {

  this.honeyPot--;
};

