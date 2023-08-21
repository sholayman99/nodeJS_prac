const superHero = require("./cachingModule");

const ironMan = new superHero("ironMan");
console.log(ironMan.getName());

ironMan.setName("Tony Stark");
console.log(ironMan.getName());

const superman = new superHero("SuperMan");
console.log(superman.getName());





// console.log(superHero.getName());

// superHero.setName("superman");
// console.log(superHero.getName());

// const newSuperHero = require("./cachingModule");
// console.log(superHero.getName());