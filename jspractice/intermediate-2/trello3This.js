let myTodos = {
    day: 'Monday',
    meetings: '',
    meetDone: '',

    addMeeting: function(num) {
        this.meetings = this.meetings + num
    },
    summary: function() {
        return `you have ${this.meetings} meetings today`
    },
    reset: function() {
        this.meetings = 0
    }
}

myTodos.addMeeting(4);
myTodos.reset()
console.log(myTodos.summary());