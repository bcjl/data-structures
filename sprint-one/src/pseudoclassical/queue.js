var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.count = 0;
  this.storage = {};
  this.first = 0;
  this.last = 0;
};

Queue.prototype.size = function(){
  return this.count;
};

Queue.prototype.enqueue = function(input){
  this.storage[this.last] = input;
  this.last++;
  this.count++;
};

Queue.prototype.dequeue = function(){
  var result = this.storage[this.first];
  delete(this.storage[this.first]);
  this.first++;
  this.count = Math.max(0, this.count - 1);
  return result;
};
