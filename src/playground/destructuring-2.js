// and now for array destructuring

const address = ['Husumgade 44A', 'Copenhagen', 'Denmark', '2200']; // you can get this kind of data
console.log(`You're in ${address[1]}, ${address[2]}`); // the easy but ugly way - does not scale well

// for destructuring objects, we use {} and for destructuring arrays we use []

const [street, city, country, postcode] = address; // name the variables in the same order they come up in the address array
console.log(`You're in ${city}, ${country}`); // this is the destructured method and scales very well

// you don't have to name all the variables. You can skip some. Just have empty spaces between the destructuring brackets, but leave the commas.
// you can also set defaults, even for non-existent new destructured variables, like continent

const [, town, , , continent = "Default continent"] = address;
console.log(`You're in ${town}, ${continent}`);

// and now a challenge

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [itemName, , priceMedium] = item;

console.log(`A medium ${itemName} costs ${priceMedium}`);

