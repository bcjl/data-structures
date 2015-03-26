var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function(){
  return this.count;
};

stackMethods.push = function(input){
  this.storage[this.count] = input;
  this.count++;
};

stackMethods.pop = function(){
  var result = this.storage[this.count-1];
  delete(this.storage[this.count - 1]);
  this.count = Math.max(0, this.count - 1);
  return result;
};
