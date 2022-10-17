const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNew = null;

  }

  root() {
    return this.rootNew;
  }

  add(data) {
   
    let newNode = new Node(data);
    if (this.rootNew === null) {
        this.rootNew = newNode;
        return;
    }  
    let currentNode = this.rootNew;

    while(currentNode) {
      if(newNode.data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;

      }
    }
  }

  has(data) {
    return checkNode(this.rootNew, data);

    function checkNode(node, data) {
      if(!node){
        return false;
      }
      if(node.data == data) {
        return true;
      }
      if(node.data < data) {
        return checkNode(node.right, data);
      } else {
        return checkNode(node.left, data);
      }
    }
  }

  find(data) {
    return findNode(this.rootNew, data);

    function findNode(node, data) {
      if(!node){
        return null;
      }
      if(node.data == data) {
        return node;
      }
      if(node.data < data) {
        return findNode(node.right, data);
      } else {
        return findNode(node.left, data);
      }
    }
  }


  remove(data) {
    this.rootNew = removeNode(this.rootNew, data); 
  
   function removeNode(node, data) {
      if (node === null) {
          return null;
    
      } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
      
      } else if (data > node.data) {
          node.right = removeNode(node.right, data);
          return node;
      
      } else {
         
          if (node.left === null && node.right === null) {
              node = null;
              return node;
          }
         
          if (node.left === null) {
              node = node.right;
              return node;
          } else if(node.right === null) {
              node = node.left;
              return node;
          }  
          
          let minRight = node.right;
          while (minRight.left) {
            minRight = minRight.left;
          }
          node.data = minRight.data;
          removeNode(node.right, minRight.data);
          return node;

      }
    }
  }

  min() {
    if (!this.rootNew) {
      return null;
    }
    let value = this.rootNew;
    while (value.left) {
      value= value.left;
    }
    return value.data;
    
  }
  
  max() {
    if (!this.rootNew) {
      return null;
    }
    let value = this.rootNew;
    while (value.right) {
      value= value.right;
    }
    return value.data;
   
  
}
}

module.exports = {
  BinarySearchTree
};