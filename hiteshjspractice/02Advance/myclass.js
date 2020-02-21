class User {
    constructor(Fname,Lname,credit) {
        this.Fname = Fname
        this.Lname = Lname
        this.credit = credit

    } 
    // getFullName = () => `${this.Fname} ${this.Lname} is my name`
    
    editname = (newname) => {
            const myname = newname.split(' ');
        this.Fname = myname[0];
        this.Lname = myname[1];
    }

}
class Teacher extends User {
    constructor (Fname,Lname,credit,subject) {
        super(Fname,Lname,credit)
        this.subject = subject;
    }
    getFullName () {
        let fullName = `${this.Fname}${
            this.Lname
        } is my full name and i teach ${this.subject} `;
        return fullName;
    }
}

const john = new Teacher('john','andersen',34,'python');
console.log(john.getFullName());
john.editname('jatin jain')
console.log(john.getFullName());
