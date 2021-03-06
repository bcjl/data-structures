var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket;
  var found = false;
  bucket = this._storage.get(i) || [];
  for(var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === key){
      bucket[j][1] = value;
      found = true;
    }
  }
  if(!found){
    bucket.push([key, value]);
  }
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  for(var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === key){
      return bucket[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  for(var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === key){
      return bucket.splice(j, 1);
    }
  };
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert = constant time complexity O(1)
 * retrieve = constant time complexity O(1)
 * remove = constant time complexity O(1)
 */
