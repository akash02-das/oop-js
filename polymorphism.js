// 🌟 Witness code objects shape-shifting with Polymorphism.

class Player {
  // Private properties
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
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

  // Method overriding
  getPlayerDetails() {
    return `${this.getName()} is ${this.getAge()} years old and number of centuries: ${
      this.#centuries
    }`;
  }
}

class Footballer extends Player {
  // Private property
  #goals;

  constructor(name, age, goals) {
    super(name, age);
    this.#goals = goals;
  }

  // Method overriding
  getPlayerDetails() {
    return `${this.getName()} is ${this.getAge()} years old and number of goals: ${
      this.#goals
    }`;
  }
}

const sakib = new Cricketer('Sakib', 36, 14);
const neymar = new Footballer('Neymar', 31, 436);

console.log(sakib.getPlayerDetails());
console.log(neymar.getPlayerDetails());
