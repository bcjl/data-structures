var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    if(list.head === null){
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.head.prev = Node(value);
      list.head.prev.next = list.head;
      list.head = list.head.prev;
    }
  };

  list.addToTail = function(value){
    if(list.tail === null){
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail.next.prev = list.tail;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var output = list.head;
    delete(list.head);
    list.head = output.next;
    if(list.head){
      list.head.prev = null;
    }
    return output.value;
  };

  list.removeTail = function(){
    var output = list.tail;
    delete(list.tail);
    list.tail = output.prev;
    if(list.tail){
      list.tail.next = null;
    }
    return output.value;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode !== null){
      if(currentNode.value === target){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// addToHead method has constant time complexity O(1)
// addToTail method has constant time complexity O(1)
// removeHead method has constant time complexity O(1)
// removeTail method has constant time complexity O(1)
// contains is linear complexity O(n)
