class Person {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(this.name);
  }
}

const piotr = new Person("Piotr");
piotr.name // 'Piotr'
piotr.printName();

const mariola = new Person("Mariola");
mariola.name; // 'Mariola'
mariola.printName(); // 'Mariola'
