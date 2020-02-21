let say = function(name) {
    console.log(`hello this is ${name}`);
    console.log(`hey ${name}`);
}
say('jhon')


let fullName = function(fname, lname) {
    console.log('welcome');
    console.log(`happy to have you , ${fname} ${lname}`);
}

fullName('jhon', 'doe')


let myAdder = function(nm1, nm2) {
    let added = nm1 + nm2;
    return added;
}

console.log(myAdder(3, 5))
let res = myAdder(3, 5)
console.log(res)



let multiplier = function(nm1, nm2) {
    return nm1 * nm2
}
console.log(multiplier(2, 2))


let guestUser = function(name = 'unName', courseCount = 0) {
    return 'Hello' + name + ' and yours course count is ' + courseCount
}
console.log(guestUser('jhn'))