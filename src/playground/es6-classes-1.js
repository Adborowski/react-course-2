// new syntax! note how there are no commas in this definition. it's unique
class Person{

    constructor(name = 'Anon', age = 0){ // the " = 'Anon' " is the FUNCTION DEFAULT
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        // return "Hello, my name is "+this.name+"!";
        return `Hello! I am ${this.name}.` // this is an ES6 template string
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{

    constructor(name, age, major){
        super(name, age); // this calls the parent constructor and passes on the data to the subclass
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        
        if(this.hasMajor()){ // current instance of student
            description = description + " Their major is " + this.major +".";
        }

        return description;
    }
}

class Traveler extends Person{

    constructor(name, age, major, homeLocation){
        super(name, age, major);
        this.homeLocation = homeLocation;
    }

    getGreeting(){

        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }

        return greeting;
    }

}

const one = new Traveler('Adam Borowski', 25, 'Web Development', 'Poland');
console.log(one.getGreeting());
console.log(one);
// console.log(one.getDescription());

const two = new Traveler();
console.log(two.getGreeting());
console.log(two);
// console.log(two.getDescription());
