const add = (a,b) => {
    // console.log(arguments);
    return a+b;
}
console.log(add(5, 10));

const user = {
    name: "Adam Borowski",
    cities: [
        "Warsaw",
        "London",
        "Copenhagen"
    ],
    printPlacesLived: function(){ return this.cities.map((city)=>this.name + " has lived in "+ city+"!")

        // this.cities.forEach((city)=>{
        //     console.log(this.name + " has lived in " + city);
        // });

        
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    aNumbers: [],
    multiplyBy: 5,
    multiply: function(array){
        this.aNumbers = array;
        console.log(this.aNumbers);
        
        // return this.aNumbers.map((number)=>{
        //     return number*this.multiplyBy;
        // });

        return this.aNumbers.map( (number) => number*this.multiplyBy );

    }
}

console.log(multiplier.multiply([1,2,3,4,5]));