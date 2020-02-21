// const myTodos = ['Buy Bread', 'go to gym', 'Record videos']
// console.log(myTodos.indexOf('Buy Bread'));


const newTodos = [{
    titile: 'Buy Bread',
    isDone: false,
}, {
    titile: 'go to gym',
    isDone: false,
}, {
    titile: 'Record videos',
    isDone: true,
}]

// const index = newTodos.findIndex(function(todo, index){
//     console.log(todo);
//     return todo.titile === 'go to gym'
// })
// console.log(index);




// // method 1
// const findTodo = function(myTodos, titile){
//     const index = myTodos.findIndex(function(todo , index){
//         return todo.titile.toLowerCase() === titile.toLowerCase()
//     })
//     return myTodos[index]
// }
// let printMe = findTodo(newTodos,'Go to gym')
// console.log(printMe);