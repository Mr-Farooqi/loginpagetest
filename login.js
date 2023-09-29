const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "home.html"
    }else{
        alert("Incorrect username & password")
    }
})

// function for checking username and password
//1 persion
function authentication(username,password){
    if(username === "admin" && password === "password"){
        return true
    }else{
        return false
    }
}
//second persion
function authentication(username,password){
    if(username === "adil" && password === "14912"){
        return true
    }else{
        return false
    }
}