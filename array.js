const memory = require('./memory');
let Memory = new memory(); // Need to be a "member" of this Class to access it. So need to instantiate it...

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }

  push(value) {
    if(this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if(this.ptr === null) {
      throw new Error('Out of memory');
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
    this._capacity = size;
  }

  pop() {
    if(this.length === 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  get(index) {
    if(index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return Memory.get(this.ptr + index);
  }

  insert(index, value) {
    if(index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if(this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if(index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(this.ptry + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  console.log(arr.get(0));

  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');
  console.log(arr.get(0)); // NaN ... This is because Float64Array(1024) means it only accepts floats(decimals) / integers.
}

//_resize()...The underscore in the resize means that it is a private function. Since it is created in our Array class, we are basically saying that we DO NOT want
// ._resize() to be accessed anywhere in our code OUTSIDE of our Array class. For example, we do not want to call it in our function main()
//Although JS does not actaully have a private operator, other languages do. the "_" is just to let devs know DO NOT TOUCH OUTSIDE OF THE CLASS.

main();