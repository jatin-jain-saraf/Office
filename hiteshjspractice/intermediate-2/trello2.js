let myTodos = {
    day: 'Monday',
    meetings: '0',
    meetDone: '0'
}

let addMeet = function(todo, meet = 0) {
    todo.meetings = todo.meetings + meet
}

let meetDone = function(todo, meet = 0) {
    todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo) {
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummary = function(todo) {
    let meetLeft = todo.meetings + todo.meetDone
    return `you have ${meetLeft} meetings today`
}
resetDay(myTodos)
addMeet(myTodos, 4)

addMeet(myTodos, 2)

meetDone(myTodos, 5)

console.log(getSummary(myTodos));