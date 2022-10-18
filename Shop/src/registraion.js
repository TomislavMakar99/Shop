import {db, auth} from './inicialization.js'

// Main variables 
const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const pass2 = document.getElementById("password2")

const emailD = email.value
const passwordD = pass.value

form.addEventListener("submit", e =>{
    e.preventDefault();
    register()
       
})

//Authentication
const register = () =>{
    const emailR = email.value
    const passwordR = pass.value
    const password2R = pass2.value
    
    if(passwordR === password2R){
        auth.createUserWithEmailAndPassword(emailR, passwordR)
    .then((res)=>{
        console.log(res.user)
        saveData() // saving data to database
        alert("Successful registration")
  
        window.location.href = "index.html"; 
    })
    .catch((err)=>{
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })

    }else{
        alert("Password again is incorect")  
    }   
}
// Saving data to database
const saveData= () => {
    const emailD = email.value
    const passwordD = pass.value
    const userD = username.value

        db.collection("users")
    .add({
        email: emailD,
        password: passwordD,
        user: userD
        },
        // seting discount to true in local storage
        localStorage.setItem("discount", true )
    )
    .then((docRef) =>{
        console.log("Document written with ID:", docRef.id)
    }).catch((error)=>{
        console.error("Error adding document", error)
    })   
 }
 
/*
    // Checking users input

    const validateInputs = () =>{
    //fetching users data
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const pass2Value = pass2.value.trim();


    //Check username
    if(usernameValue === ""){
        setError(username, "Username is not defined")
    }else{
        sucess(username);
    }
    //Check mail
    if(emailValue ===""){
        setError(email, "Mail not defined")
    }else if (!isValidEmail(emailValue)){
        setError(email, "Not valid mail")
    }else{
        sucess(email)
    }
     //Check pasword
    if(passValue === ""){
        setError(pass, "Pasword not defined")
    }else if (passValue.length < 6){
        setError(pass, "6 or more caracters")
    }else{
        sucess(pass)
    }
    // Check pasword2
    if(pass2Value === ""){
        setError(pass2, "Pasword2 not defined")
    }else if (pass2Value !== passValue){
        setError(pass2, "Paswords dont match")
    }else{    
     sucess(pass2)
     
    }
}
*/

/*
    // Function if error acures
    const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const error = inputControl.querySelector(".error")

    error.innerText = message
    inputControl.classList.add("error");
    inputControl.classList.remove("sucess")
}
   
    // function for sucess   
    const sucess = element =>{
        const inputControl = element.parentElement;
        const error = inputControl.querySelector(".error")

        error.innerText="";
        inputControl.classList.add("sucess");
        inputControl.classList.remove("error");
    }
// Checking valid email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}
console.log(isValidEmail("tomislav.makar99@gmail.com"))

*/









