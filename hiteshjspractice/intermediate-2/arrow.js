// // normal function

// // const sayHello = function (name) {
// //     return "hey there " + name + " !"
// // }

// // console.log(sayHello("sammy"));







// // // arrow function

// // const sayHello = (name) => {
// //     return "hey there " + name + " !"
// // }
// // console.log(sayHello("sammy"));






// // // type2

// // const sayHello = (name) => {
// //     return `hey there  ${name} `
// // }
// // console.log(sayHello("sammy"));



// // // type3

// // const sayHello = (name) => `hey there  ${name} `
// // console.log(sayHello("sammy"));



// // const todos = [{
// //     title: 'Buy Bread',
// //     isDone: true,
// // }, {
// //     title: 'Go TO Gym',
// //     isDone: true,
// // }, {
// //     title: 'Record Videos',
// //     isDone: false
// // }] 


// // const thingsDone = todos.filter((todo) => todo.isDone === true)

// // console.log(thingsDone);





// // mes with arrrow
// // this keyword problem
// // please never use arrow function in methods beacuse we have to bind it 
// const cameras = {
//     price: 600,
//     weight: 2000,
//     myDes: () => {
//         return `this is canon camera of ${this.price}$`
//     }
// }
// console.log(cameras.myDes());


const cameras = {
    price: 600,
    weight: 2000,
    myDes: () => {
        return `this is canon camera of ${this.price}$`
    }
}
console.log(cameras.myDes());