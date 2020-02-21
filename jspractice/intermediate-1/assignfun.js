let marks = function(obtMarks, totalMarks) {
    let myPercent = (obtMarks / totalMarks) * 100;
    let myGrade = ''
    if (myPercent >= 90) {
        myGrade = 'A'
    } else if (myPercent >= 80) {
        myGrade = 'B'
    } else if (myPercent >= 70) {
        myGrade = 'C'
    } else if (myPercent >= 60) {
        myGrade = 'D'
    } else {
        myGrade = 'F'
    }
    return `Your grade is ${myGrade} and Percentage is ${myPercent}`
}

let result = marks(500, 500);
console.log(result)