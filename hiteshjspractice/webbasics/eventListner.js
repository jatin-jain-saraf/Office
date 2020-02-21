// document.querySelector("button").addEventListener('click' , () => {
//     console.log("clicked")
// })
// simple

// document.querySelector("button").addEventListener('click' , (event) => {
//        console.log(event)
//      })
// event

document.querySelector("button").addEventListener('click' , (event) => {
    event.target.textContent = 'i Was Clicked';
     })