var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;
  var last = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[last] = value;
    last++;
    size++;
  };

  someInstance.dequeue = function(){
    var result = storage[first];
    delete storage[first];
    first++;
    size = Math.max(0, size-1);
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
