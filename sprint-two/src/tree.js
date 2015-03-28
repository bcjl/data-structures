var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
  this.children[this.children.length - 1].parent = this;
};

treeMethods.removeFromParent = function(){
  var siblings = this.parent.children;
  for(var i = 0; i < siblings.length; i++){
    if(siblings[i] === this){
      siblings.splice(i, 1);
      break;
    }
  }
  this.parent = null;
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  }
  for(var i = 0; i < this.children.length; i++){
    if(this.children[i].contains(target)){
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// The addChild method has constant time complexity O(1)
// The removeFromParent method has a linear time complexity O(n)
// The contains method has a linear time complexity O(n)

