

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  var newNode = {};
  newNode.val = node;
  newNode.edges = [];

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

Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.storage[fromNode].edges.indexOf(toNode) > -1 && this.storage[toNode].edges.indexOf(fromNode) > -1){
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(this.contains(fromNode) && this.contains(toNode)){
    this.storage[fromNode].edges.push(toNode);
    this.storage[toNode].edges.push(fromNode);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var toNodeEdgeRefIndex = this.storage[fromNode].edges.indexOf(toNode);
  var fromNodeEdgeRefIndex = this.storage[toNode].edges.indexOf(fromNode);

  this.storage[fromNode].edges.splice(toNodeEdgeRefIndex, 1);
  this.storage[toNode].edges.splice(fromNodeEdgeRefIndex, 1);

};

Graph.prototype.forEachNode = function(cb){
  _.each(this.storage, function(node){
    cb(node.val);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



