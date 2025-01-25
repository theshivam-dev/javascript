const button = document.getElementById('button')
const body = document.body
let darkMode = 0

button.addEventListener('click',()=>{
  if(darkMode === 0) {
    body.style.backgroundColor = "black"
    body.style.color="white"
    button.innerHTML="Light"
    const localstorageMode = 'DARKMODE'
    localStorage.setItem('mode','DARKMODE')
    darkMode = 1
  }
  else {
    body.style.backgroundColor="white"
    body.style.color="black"
    button.innerHTML="Dark"
    const localstorageMode = 'LIGHTMODE'
    localStorage.setItem('mode','LIGHTMODE')
    darkMode = 0
  }
})

window.addEventListener('load',()=>{
  const mode = localStorage.getItem('mode')
  if (mode === 'DARKMODE'){
    body.style.backgroundColor="black"
    body.style.color="white"
    button.innerHTML="Light"
  }
  else if(mode === 'LIGHTMODE') {
    body.style.backgroundColor="white"
    body.style.color="black"
    button.innerHTML="Dark"
  }
})
