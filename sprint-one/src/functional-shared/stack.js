var Stack = function() {
  var someInstance = {};
  // var count = 0;
  someInstance.count = 0;
  someInstance.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

// stackMethods.count = 0;
// stackMethods.storage = {};

stackMethods.size = function(){
  return this.count;
};

stackMethods.pop = function(){
  var result = this.storage[this.count - 1];
  delete(this.storage[this.count - 1]);
  this.count = Math.max(0, this.count - 1);

  return result;
};

stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};
