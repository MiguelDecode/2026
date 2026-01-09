const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

// const name = person.name
// const age = person.age
// const key = person.key

const { name: userName, age: userAge, key } = person;

console.log(userName, userAge, key);

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = (hero: Hero) => {
  const { name, age, key, rank } = hero;

  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
  };
};

const {
  keyName,
  rank = "Without range",
  //   user: { name, age },
  user,
} = useContext(person);

const { name, age } = user;

console.log(rank, keyName, name, age);
