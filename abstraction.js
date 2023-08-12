// 🎭 Hide complexity and make coding a breeze with Abstraction

class BetterArray {
  // Private property
  #items;

  constructor() {
    this.#items = [];
  }

  getItems() {
    return [...this.#items];
  }

  addItem(item) {
    return this.#items.push(item);
  }

  removeItem(itemToDelete) {
    return (this.#items = this.#items.filter((item) => item !== itemToDelete));
  }

  modifyItem(itemToChange, newValue) {
    const indexItem = this.#items.indexOf(itemToChange);

    if (indexItem !== -1) {
      this.#items[indexItem] = newValue;
    }
  }
}

const myArray = new BetterArray();

myArray.addItem('JavaScript');
myArray.addItem('Python');
console.log(myArray.getItems());

myArray.modifyItem('Python', 'Ruby');
console.log(myArray.getItems());

myArray.removeItem('Ruby');
console.log(myArray.getItems());
