

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  var newNode = {};
  newNode.val = node;
  newNode.edges = {};

  this.storage[node] = newNode;
};

Graph.prototype.contains = function(node){
  for(var key in this.storage){
    if(this.storage[key].val === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for(var key in this.storage){
    if(this.storage[key].val === node){
      delete this.storage[key];
      //Must add a check to see if any nodes are edge connected to it b4 delete
    }
  }
};

Graph.prototype.hasEdge = function(fromNodeVal, toNodeVal){
  var fromNode = this.storage[fromNodeVal];
  var toNode = this.storage[toNodeVal];
  if(fromNode.edges[toNodeVal] && toNode.edges[fromNodeVal]){
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNodeVal, toNodeVal){
  var fromNode = this.storage[fromNodeVal];
  var toNode = this.storage[toNodeVal];

  if(this.contains(fromNodeVal) && this.contains(toNodeVal)){
    fromNode.edges[toNodeVal] = toNode;
    toNode.edges[fromNodeVal] = fromNode;
  }
};

Graph.prototype.removeEdge = function(fromNodeVal, toNodeVal){
  var fromNode = this.storage[fromNodeVal];
  var toNode = this.storage[toNodeVal];

  delete fromNode.edges[toNodeVal];
  delete toNode.edges[fromNodeVal];
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.storage, function(node){
    cb(node.val);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



