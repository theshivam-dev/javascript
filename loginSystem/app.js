import { login, logout, isAuthenticated } from "./auth.js";

const userName = document.getElementById('userName')
const userPassword = document.getElementById('userPassword')
const loginbtn = document.getElementById('loginbtn')
const logoutbtn = document.getElementById('logoutbtn')
const  output = document.getElementById('output')

loginbtn.addEventListener('click',()=>{
    const name = userName.value 
    const password = userPassword.value
   const loginVal = login(name,password)

    const loginData = {
        name :name,
        password : password
    } 
    localStorage.setItem('loginData',JSON.stringify(loginData))
    isAuthenticated()
    output.innerHTML = loginVal
    userPassword.value = ''
    userName.value = ''
})

logoutbtn.addEventListener('click',()=>{
   const logoutVal = logout()
   isAuthenticated()
   output.innerHTML = logoutVal
})
