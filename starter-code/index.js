class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if(this.notEmpty()) {
      return this.get(this.length);
    }
  }
  min() {
    if(this.notEmpty()) {
      return this.get(1);
    }
  }
  average() {
    if(this.notEmpty()) {
      return this.sum() / this.length;
    }
  }
  sum() {
    if(this.notEmpty(false)) {
      return this.items.reduce((item, acc) => item + acc, 0);
    } else {
      return 0;
    }
  }
  notEmpty(throwError = true) {
    if(this.length == 0) {
      if(throwError) {
        throw new Error("EmptySortedList");
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
};

module.exports = SortedList;
