// 🔗 Create new coding heroes through Inheritance

class Player {
  // Private properties
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getPlayerDetails() {
    return `${this.#name} is ${this.#age} years old`;
  }
}

class Cricketer extends Player {
  // Private property
  #centuries;

  constructor(name, age, centuries) {
    super(name, age);
    this.#centuries = centuries;
  }
}

class Footballer extends Player {
  // Private property
  #goals;

  constructor(name, age, goals) {
    super(name, age);
    this.#goals = goals;
  }
}

const sakib = new Cricketer('Sakib', 36, 14);
const neymar = new Cricketer('Neymar', 31, 436);

console.log(sakib.getPlayerDetails());
console.log(neymar.getPlayerDetails());
