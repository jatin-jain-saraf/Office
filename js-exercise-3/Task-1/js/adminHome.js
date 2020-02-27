let currentUser = localStorage.getItem('currentUser');
let userArr = localStorage.getItem('userArr');
userArr = JSON.parse(userArr);
let name;
let coursesArr = JSON.parse(localStorage.getItem('coursesArr')) ? JSON.parse(localStorage.getItem('coursesArr')) : [];

let courseName = document.getElementById("courseName");
let courseImg = document.getElementById("courseImg");
let courseLink = document.getElementById("courseLink");
let courseId = 0;
let result = "";
let img;
let res;
let studentForAssign = '';


if (!localStorage.getItem('currentUser')) {
    window.location.href = '../src/login.html';
} else {
    for (let i = 0; i < userArr.length; i++) {
        if (currentUser === userArr[i].email) {
            if (userArr[i].role === "admin") {
                // window.location.href =userArr '../admin/index.html';
            } else {
                window.location.href = '../src/login.html';
            }
        }
    }
}



logout = () => {
    let confirmBtn = confirm("Are u sure want to logout?")
    if (confirmBtn == true) {
        localStorage.removeItem('currentUser');
        window.location.href = '../src/login.html';
    } else {
        window.location.href = '#';
    }
}






for (let user of userArr) {
    if (user.email === currentUser) {
        currentUserName = user.name;
    }
}
document.getElementById("role").innerHTML = currentUserName;

document.getElementById("AddCourse").addEventListener('click',event => {
    if (courseName.value == '') {
        alert("Please Enter the course Name ")
    } else if (courseImg.value == '') {
        alert("Please Enter the course Image ")
    } else if (courseLink.value == '') {
        alert("Please Enter the course Link ")
    } else {
        console.log('Hello');
        
        let objOfCourse = {
            courseName: courseName.value,
            courseImg: courseImg.value,
            courseLink: courseLink.value,
            courseId: coursesArr.length + 1
        }


        coursesArr.push(objOfCourse);
        console.log(objOfCourse);
        
        localStorage.setItem('coursesArr', JSON.stringify(coursesArr));
        window.location.href = "../src/adminHome.html";
    }
})
let coursesArrFetch = localStorage.getItem('coursesArr');
coursesArrFetch = JSON.parse(coursesArrFetch);


for (let i = 0; i < coursesArrFetch.length; i++) {
    courseId = coursesArrFetch[i].courseId
    img = coursesArrFetch[i].courseImg;
    result += `<div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="card text-center">
                            <img src = '${img}'>
                            <div class="card-body">
                            <h5 class="card-title">${coursesArr[i].courseName}</h5>
                        </div>
                        <div class="card-footer">
                            <button type="button" onclick = "assignCourse(${courseId})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
                                Assign Course
                            </button>
                        </div>
                    </div>`
}
document.getElementById("allCourse").innerHTML = result;


assignCourse = (courseId) => {

    for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].role === "student") {
            // console.log(courseId)
            studentForAssign += `<tr> 
                                    <td>${userArr[i].name}</td>
                                    <td>${userArr[i].email}</td>
                                    <td><input type="checkbox" id="${userArr[i].email}" onclick="sendDataToStudent(${courseId},'${userArr[i].email}')" value = '${courseId}' ${userArr[i].courses.includes(courseId)? "checked" : ""}></td>
                                </tr>`
        }
    }

    document.getElementById("assignCourse").innerHTML = studentForAssign;
}

