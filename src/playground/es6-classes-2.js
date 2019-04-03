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

class Student extends Person {

    constructor (name, age, major='Undecided') {
        super(name, age);
        this.major = major; 
    }

    hasMajor() {
        return !!this.major; 
    }

    getDescription() {

        let description = super.getDescription(); 
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description; 
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age); 
        this.homeLocation = homeLocation; 
    }

    getGreeting() {
        let greeting = super.getGreeting(); 
        if (!!this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        } 

        return greeting; 
    }
}

const me = new Traveler("Andrew Patterson", 24, 'San Francisco'); 
console.log(me.getGreeting());