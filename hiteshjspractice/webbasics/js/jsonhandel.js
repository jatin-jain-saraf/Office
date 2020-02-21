const student = {
    name: 'john',
    age: 23,
    isActive: true
}


// convert is object to string to be stored in local storage

const studentObjToString = JSON.stringify(student)
console.log(typeof studentObjToString);
// localStorage.setItem('student',studentObjToString);

const toJSONStudent =JSON.parse(studentObjToString);
console.log(typeof(toJSONStudent));
console.log(toJSONStudent.age);

