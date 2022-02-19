class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor(){
    this.head = null;
  }

  addFront(value){
    let newNode = new Node(val);

    if(!this.head){ //is this the head node? 
      this.head = newNode;//if it is not, the newNode is now the head
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  removeFront(){
    if (!this.head){
      return this;
    }else{
      let holder = this.head;
      this.head = holder.next;
      holder.next = null;
    }
  }
}

  front(){
    if(this.head){
      return this.head.data;
    }
      return null;
  }
}