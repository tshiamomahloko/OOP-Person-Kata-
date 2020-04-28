class Person {
    constructor(name, age, gender, interests) {
        this.name = name
        this.age = age
        this.gender = gender
        this.interests = interests
    }
    hello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old ${this.gender}. My interests are ${this.interests}.`)
    }
}
module.exports = {Person: Person}