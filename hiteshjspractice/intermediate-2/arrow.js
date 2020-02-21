// normal function

// const sayHello = function (name) {
//     return "hey there " + name + " !"
// }

// console.log(sayHello("sammy"));







// // arrow function

// const sayHello = (name) => {
//     return "hey there " + name + " !"
// }
// console.log(sayHello("sammy"));






// // type2

// const sayHello = (name) => {
//     return `hey there  ${name} `
// }
// console.log(sayHello("sammy"));



// // type3

// const sayHello = (name) => `hey there  ${name} `
// console.log(sayHello("sammy"));



const todos = [{
    title: 'Buy Bread',
    isDone: true,
}, {
    title: 'Go TO Gym',
    isDone: true,
}, {
    title: 'Record Videos',
    isDone: false
}] 


const thingsDone = todos.filter((todo) => todo.isDone === true)

console.log(thingsDone);