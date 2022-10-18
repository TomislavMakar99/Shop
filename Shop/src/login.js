import {db, auth} from './inicialization.js'

form.addEventListener("submit", e =>{
    e.preventDefault();
    login();    
})

const login = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    auth.signInWithEmailAndPassword(email, password)

.then((res)=>{
    console.log(res.user)
    alert("Successful login")
    window.location.href = "index.html"; 
})
.catch((err)=>{
    alert(err.message)
    console.log(err.code)
    console.log(err.message)
})
}