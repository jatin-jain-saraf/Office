// datatype - Array 

const superHeroes = ['one', 'two', 'three', 'four', 'five', 'six']
console.log(superHeroes);
// console.log(superHeroes[0]);
// console.log(superHeroes[2]);
// console.log(superHeroes[superHeroes.length - 1]);


// // shift methods 

// console.log(superHeroes.shift());
// console.log(superHeroes);

// // unshift methods 

// superHeroes.unshift('SOMETHING');
// console.log(superHeroes);

// // pop methods 

// console.log("The element is to be deleted " + superHeroes.pop());
// console.log(superHeroes);

// // push methods 

// console.log("The element is to be insetred " + superHeroes.push('seven'));
// console.log(superHeroes);

// splice methods 

superHeroes.splice(2, 1, 'something');
console.log(superHeroes);