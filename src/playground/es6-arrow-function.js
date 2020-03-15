const square = function(x){
    return x * x;
}
console.log(square(8));

const squareArrow = (x) => x*x;
console.log(squareArrow(9));

const fullName = "Adam Borowski";

// verbose arrow syntax
const getFirstName = (fullName) => {return fullName.split(" ")[0]};

// shorthand (expression) arrow syntax
const getFirstNameShorthand = (fullName) => fullName.split(" ")[0];

console.log(getFirstName(fullName));
console.log(getFirstNameShorthand(fullName));