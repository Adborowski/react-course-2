console.log("[DESTRUCTURING.JS]");

const person = {
    name: "Adam",
    age: 26,
    location: {
        city: "Copenhagen",
        temp: "10C"
    }
}

// this is the basic way
console.log(`${person.name} is ${person.age} years old.`);

// we can simplify variable names like this (commenting out because of dupe declaration error)
// const name = person.name;
// const age = person.age;
// console.log(`${name} is ${age} years old.`);

// we can simplify even more by using object destructuring
const {name, age} = person
console.log(`${name} is ${age} years old.`)

// you can enter deeper object layers like this
const {city, temp} = person.location;
console.log(`It's currently ${temp} in ${city}`);

// you can also give the destructured variables new names
const {city: town, temp: temperature} = person.location;
console.log(`It's currently ${temperature} in ${town}`)

// you can also add default values
const {country: nation = "Default Country"} = person.location;
console.log(`${name} comes from ${nation}`)

// now a challenge from Andrew Mead

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name : publisherName = 'Self-Published'} = book.publisher; // change name to publisherName and set a default of 'Self-Published' if undefined
console.log(publisherName); // use Penguin if available, or the default of Self-Published if not