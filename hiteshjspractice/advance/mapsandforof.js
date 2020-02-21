var john = {
    name: 'i am john',
    age: 24,
    isActive: true
}

var marry ={
    name: 'i am marry',
    age: 23,
    isActive: true
}
var sam ={
    name: 'i am sam',
    age: 29,
    isActive: false
}

let user = new Map()
// console.log(typeof user);
user.set('john', john)
user.set('marry' ,marry)
user.set('sam',sam)
// console.log(user.size);
// console.log(user.get('sam'));
// console.log(user.keys());
// console.log(user.values());





// for of

// for (const keys of user.keys()) {
//     console.log(keys);
// }
// console.log("----------------------------------------------------");
// for (const values of user.values()) {
//     console.log(values);

// }
// console.log("----------------------------------------------------");


// for (const values of user.values()) {
//     console.log(values.name);

// }
// console.log("----------------------------------------------------");


// for (const [key,value] of user.entries()) {
//     console.log(key + '=' + value.name);

// }


// // for each
// user.forEach((value,key) => console.log(key + '=' + value.name))


// user.forEach((key,value) => console.log(key + '=' + value.name))



var arroArr = [['one','1'], ['two','2'], ['three','3']]
 var newMap = new Map(arroArr)
console.log(newMap);
