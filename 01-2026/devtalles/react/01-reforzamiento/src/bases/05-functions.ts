interface User {
  uuid: string;
  username: string;
  addNumber?: () => void;
}

function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string): string => `Hola ${name}`;

const message = greet("Goku");
const message2 = greet2("Vegeta");

console.log({ message, message2 });

function getUser(): User {
  return {
    uuid: "ABC-123",
    username: "El_padrino",
  };
}

const getUser2 = (): User => ({ uuid: "ABC123", username: "El_caballo" });

const user = getUser();
const user2 = getUser2();

console.log({ user, user2 });

const myNumbers: number[] = [1, 2, 3, 4, 5];

// myNumbers.forEach(function (value) {
//   return console.log(value);
// });

// myNumbers.forEach((num) => console.log(num));

// The most short mode
myNumbers.forEach(console.log);

// Explanation of short mode
myNumbers.forEach((value, index, array) => console.log(value, index, array));


