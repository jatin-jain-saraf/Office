let currentUser = localStorage.getItem('currentUser');
let userArr = localStorage.getItem('userArr');
userArr = JSON.parse(userArr);
let currentUserName;
let add = document.querySelector("#add");
console.log(userArr);
for (let user of userArr) {
    if (user.email === currentUser) {
        currentUserName = user.name;
    }
}
document.querySelector("#role").innerHTML = currentUserName;

// function ADD () {
// add.innerHTML += `<!-- Trigger the modal with a button -->
//     <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
    
//     <!-- Modal -->
//     <div id="myModal" class="modal fade" role="dialog">
//       <div class="modal-dialog">
    
//         <!-- Modal content-->
//         <div class="modal-content">
//           <div class="modal-header">
//             <button type="button" class="close" data-dismiss="modal">&times;</button>
//             <h4 class="modal-title">Modal Header</h4>
//           </div>
//           <div class="modal-body">
//             <p>Some text in the modal.</p>
//           </div>
//           <div class="modal-footer">
//             <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
//           </div>
//         </div>
    
//       </div>
//     </div>`
//     }