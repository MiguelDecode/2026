import { heroes, Owner, type Hero } from "./data/heroes.data";
// import { heroes as myFavouriteHeroes } from "./data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => hero.id === id);

  return hero;

  // if (!hero) {
  //   throw new Error(`Don't exist a hero with the id: ${id}`);
  // } else {
  //   return hero;
  // }
};

const firstHero = getHeroById(2);

console.log(firstHero);

export const getHeroesByOwner = (owner: Owner): Hero[] => {
  return heroes.filter((hero) => hero.owner === owner);
};
