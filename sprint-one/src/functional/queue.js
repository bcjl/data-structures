var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var firstIndex = 0;
  var lastIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[lastIndex] = value;
    lastIndex++;
    size++;
  };

  someInstance.dequeue = function(){
    var result = storage[firstIndex];
    delete(storage[firstIndex]);
    firstIndex++;
    size = Math.max(0, size - 1);
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
