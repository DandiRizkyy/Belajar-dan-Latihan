class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello my name is ${this.name} and im ${this.age}`);
  }
}

const manusia = new Person("Dandi", 22);
console.log(Person.this.name);
