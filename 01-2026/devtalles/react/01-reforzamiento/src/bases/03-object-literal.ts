interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  postalCode: number;
  city: string;
}

const ironman: Person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    postalCode: 123123,
    city: "New York",
  },
};

/* // Target the same spot at the memory
// const spiderman = ironman;
// const spiderman = { ...ironman };

const spiderman = structuredClone(ironman);

spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 22;
spiderman.address.city = "San Josè";

console.log(ironman, spiderman); */

console.log(ironman);
