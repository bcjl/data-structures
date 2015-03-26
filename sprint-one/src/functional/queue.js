var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstIndex = 0;
  var lastIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[lastIndex] = value;
    lastIndex++;
  };

  someInstance.dequeue = function(){
    var result = storage[firstIndex];
    delete(storage[firstIndex]);
    firstIndex = Math.min(firstIndex + 1, lastIndex);
    return result;
  };

  someInstance.size = function(){
    return Math.max(0, lastIndex - firstIndex);
  };

  return someInstance;
};
