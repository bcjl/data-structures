

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
  // Valid values return truthy, invalid falsey, this casts to boolean
  return !!this.storage[node];
};

Graph.prototype.removeNode = function(node){
  if(this.contains(node)){
    for(var edge in this.storage[node].edges){
      delete this.storage[edge].edges[node];
    }
    delete this.storage[node];
  }
};

Graph.prototype.hasEdge = function(fromNodeVal, toNodeVal){
  var fromNode = this.storage[fromNodeVal];
  // After && operand: Valid values return truthy, invalid falsey, this casts to boolean
  return this.contains(fromNodeVal) && !!fromNode.edges[toNodeVal];
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
  if(this.contains(fromNodeVal) && this.contains(toNodeVal)){
    delete fromNode.edges[toNodeVal];
    delete toNode.edges[fromNodeVal];
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.storage, function(node){
    cb(node.val);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * AddNode = constant O(1)
 * Contains = constant O(1)
 * removeNode = linear O(n)
 * hasEdge = constant O(1)
 * addEdge = constant O(1)
 * removeEdge = constant O(1)
 * forEachNode = linear O(n)
 */



