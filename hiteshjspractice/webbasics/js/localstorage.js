localStorage.setItem('hero', 'thor');
localStorage.setItem('todo','Buy ')
var myhero = localStorage.getItem('hero');
console.log(myhero);
console.log(localStorage.getItem('todo'));
localStorage.setItem('todo', 'Record');
console.log(localStorage.getItem('todo'));
localStorage.removeItem('hero')
console.log(myhero);
