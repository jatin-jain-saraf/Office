let map = new Map();
map.set('1', 'str');
map.set(1, 'num1');
map.set(true, 'bool');
console.log(map.get(1));
console.log(map.get('1'));
console.log(map.size);