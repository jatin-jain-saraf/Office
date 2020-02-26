let currentUser = localStorage.getItem('currentUser');
let userArr = localStorage.getItem('userArr');
userArr = JSON.parse(userArr);
let currentUserName;
console.log(userArr);
for (let user of userArr) {
    if (user.email === currentUser) {
        currentUserName = user.name;
    }
}
document.querySelector("#role").innerHTML = currentUserName;


