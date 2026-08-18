class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return `The name is ${this.firstName} ${this.lastName}`;
    }
}

let person1 = new Person("CBIT", "MGIT");

console.log(person1.getName());
