class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends User {
  constructor(name, age, standard) {
    super(name, age);                    // When a class extends another class, you must call super() in the child class constructor before using this, or it will throw an error.
    this.standard = standard;
  }
  study() {
    console.log("studying");
  }
}
const studen1 = new Student("kevin", 20, "CSE");
console.log(studen1);

class Employee extends User {
  constructor(name, age, company) {
    super(name, age);
    this.company = company;
  }
  work () {
    console.log('hacking');
  }
}
const employee1 = new Employee("edward", 24, "CIA");
console.log(employee1);

// class Student {
//   constructor(name, age, standard) {
//     this.name = name;
//     this.age = age;
//     this.standard = standard;
//   }
// }

// class Employee {
//   constructor(name, age, company) {
//     this.name = name;
//     this.age = age;
//     this.company = company;
//   }
//   }

// const student1 = new Student("kevin", 20, "CSE");
// console.log(student1);

// const employee1 = new Employee("edward", 24, "CIA");
// console.log(employee1);
