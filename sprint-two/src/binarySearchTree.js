var BinarySearchTree = function(val){
var bst = Object.create(BinarySearchTree.prototype);

bst.left = null;
bst.right = null;
bst.value = val;

return bst;

};

BinarySearchTree.prototype.insert = function(value){
  if(value < this.value){
    if(this.left === null){
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if(this.right === null){
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value){
  if(this.value === value){
    return true;
  }
  if(value < this.value && !!this.left){
    return this.left.contains(value);
  } else if (value > this.value && !!this.right){
    return this.right.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb){
  cb(this.value);
  if(!!this.left){
    this.left.depthFirstLog(cb);
  }
  if(!!this.right){
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
