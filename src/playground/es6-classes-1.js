class Person {
    constructor(name='Anon', age=0) {
        this.name = name; 
        this.age = age; 
    }

    getGreeting() {
        return `Hi, my name's ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}



const me = new Person("Andrew Patterson", 24); 
console.log(me.getGreeting());
console.log(me.getDescription());