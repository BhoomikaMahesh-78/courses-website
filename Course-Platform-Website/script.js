function showPage(page){

let sections=document.querySelectorAll("section")

sections.forEach(sec=>sec.classList.remove("active"))

document.getElementById(page).classList.add("active")

}

function signup(e){

e.preventDefault()

let email=document.getElementById("email").value
let password=document.getElementById("password").value

localStorage.setItem("email",email)
localStorage.setItem("password",password)

alert("Signup successful")

showPage("login")

}

function login(e){

e.preventDefault()

let email=document.getElementById("loginEmail").value
let password=document.getElementById("loginPassword").value

let storedEmail=localStorage.getItem("email")
let storedPassword=localStorage.getItem("password")

if(email===storedEmail && password===storedPassword){

alert("Login successful")

showPage("dashboard")

}

else{

alert("Invalid login")

}

}

function sendMessage(e){

e.preventDefault()

document.getElementById("msg").innerText="Message sent successfully!"

}

function searchCourse(){

let input=document.getElementById("search").value.toLowerCase()

let cards=document.querySelectorAll(".card")

cards.forEach(card=>{

let text=card.innerText.toLowerCase()

if(text.includes(input)){

card.style.display="block"

}

else{

card.style.display="none"

}

})

}