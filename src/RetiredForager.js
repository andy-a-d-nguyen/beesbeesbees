var RetiredForagerBee = function() {

  // bind this to ForagerBee so ForagerBee will operate on new instance of RetiredForagerBee
  // bind ForagerBee's this to RetiredForagerBee's this
  ForagerBee.call(this);

  this.age = 40;

  this.job = 'gamble';

  this.canFly = false;

  this.color = 'grey';
};

// RetiredForagerBee.prototype delegates to ForagerBee.prototype
// failed lookups on RetiredForagerBee instances will fall all the way through to ForagerBee.prototype
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

// because the original prototype object was overwritten by ForagerBee's prototype
// without constructor reassignment, lookups will fall all the way through to ForagerBee's prototype
// which has a .constructor property, but points to ForagerBee itself
// without constructor reassignment, RetiredForagerBee will act as if it was created by ForagerBee
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {

  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function(treasure) {

  this.treasureChest.push(treasure);
};