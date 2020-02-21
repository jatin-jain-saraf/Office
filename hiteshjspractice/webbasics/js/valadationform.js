// document.querySelector("button").addEventListener('click' , (event) => {
//     event.target.textContent = 'i Was Clicked';
//      })

//     //  track input form

//     document.querySelector('#myform').addEventListener('change',() =>{
//         console.log(event.target.value);
//     })

function myValadation(){
    let myValue = document.getElementById('myform').value;
    
    if(isNaN(myValue) || myValue < 1 || myValue > 20 ){
        console.log('Not a valid input');
        
    } else {
        console.log('This is cool');
        
    }
}



// form valadation 

document.querySelector('.myform').addEventListener('submit' , (event) =>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value); 
    event.target.username.value = ''
    event.target.realname.value = ''
})