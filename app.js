// making navbar visible when scrolling  
const navbar = document.getElementById("nav")

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll)
    if (scroll > 150) {
        navbar.classList.add("sticky-top")
        navbar.classList.add("shadow-sm")
    } else {
        navbar.classList.remove("sticky-top")
        navbar.classList.remove("shadow-sm")
    }

});

// setting up dymanic year 
const Currentyear = document.getElementById("year");

const currentDate = new Date()
const yearNow = currentDate.getFullYear()

Currentyear.innerHTML = yearNow


// function for handling the form
// const sendToUs = document.getElementById("send-to-us")

// function formsubmit() {

//     sendToUs.addEventListener("click", (event) => {
//         event.preventDefault()
//         const email = document.getElementById("Email").value
//         const message = document.getElementById("Message").value
//         if (email === "" || message === "") {
//             console.log("empty");
//         } else {
//             console.log("success")
//         }
//     })
// }


const sendToUs = document.getElementById("sendForm")
sendToUs.addEventListener("submit", handlesubmit())

function handlesubmit(event) {
    console.log("empty");
    // event.preventDefault()
    const email = document.getElementById("Email").value
    const message = document.getElementById("Message").value
    if (email === "" || message === "") {
        console.log("empty");
    } else {
        console.log("success")
    }

}