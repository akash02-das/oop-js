// 🔒 Learn to protect your code secrets with Encapsulation

class Player {
  // Private properties
  #name;
  #birthDay;
  #monthlySalary;
  #noOfMonths;

  constructor(name, birthDay, monthlySalary, noOfMonths) {
    this.#name = name;
    this.#birthDay = birthDay;
    this.#monthlySalary = monthlySalary;
    this.#noOfMonths = noOfMonths;
  }

  calculateAge() {
    const diffMilliSec = Date.now() - new Date(this.#birthDay).getTime();
    const ageDateTime = new Date(diffMilliSec);
    const getAge = Math.abs(ageDateTime.getUTCFullYear() - 1970);

    return `${this.#name} is ${getAge} years old`;
  }

  getSalary() {
    const totalSalary = (
      this.#monthlySalary * this.#noOfMonths
    ).toLocaleString();

    return `${this.#name} ${this.#noOfMonths} months of salary: ${totalSalary}`;
  }
}

const sakib = new Player('Sakib', '1987-03-24', 200000, 12);
const tamim = new Player('Tamim', '1989-03-20', 180000, 12);

console.log(sakib.calculateAge());
console.log(sakib.getSalary());

console.log(tamim.calculateAge());
console.log(tamim.getSalary());
