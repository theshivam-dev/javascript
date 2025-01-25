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

const firstCheckbox = document.getElementById('firstCheckbox')
const firstInput = document.getElementById('firstInput')
const secondCheckbox = document.getElementById('secondCheckbox')
const secondInput = document.getElementById('secondInput')
const thirdCheckbox = document.getElementById('thirdCheckbox')
const thirdInput = document.getElementById('thirdInput')
const fourthCheckbox = document.getElementById('fourthCheckbox')
const fourthInput = document.getElementById('fourthInput')

firstCheckbox.addEventListener('click',(event)=> {
  if(event.target.checked) {
    firstInput.style.textDecoration="line-through";
    localStorage.setItem("firstCheckbox",'line')
  } else { firstInput.style.textDecoration="none"
   localStorage.setItem('firstCheckbox','none')}
})

secondCheckbox.addEventListener('click',(event)=> {
  if(event.target.checked) {
    secondInput.style.textDecoration="line-through";
    localStorage.setItem("secondCheckbox",'line')
  } else { secondInput.style.textDecoration="none"
   localStorage.setItem('secondCheckbox','none')}
})

thirdCheckbox.addEventListener('click',(event)=> {
  if(event.target.checked) {
    thirdInput.style.textDecoration="line-through";
    localStorage.setItem("thirdCheckbox",'line')
  } else { thirdInput.style.textDecoration="none"
   localStorage.setItem('thirdCheckbox','none')}
})

fourthCheckbox.addEventListener('click',(event)=> {
  if(event.target.checked) {
    fourthInput.style.textDecoration="line-through";
    localStorage.setItem("fourthCheckbox",'line')
  } else { fourthInput.style.textDecoration="none"
   localStorage.setItem('fourthCheckbox','none')}
})

window.addEventListener('load',()=>{
  const firstboxreload = localStorage.getItem('firstCheckbox')
  const secondboxreload = localStorage.getItem('secondCheckbox')
  const thirdboxreload = localStorage.getItem('thirdCheckbox')
  const fourthboxreload = localStorage.getItem('fourthCheckbox')
  if(firstboxreload === 'line') {
    firstInput.style.textDecoration="line-through"
    firstCheckbox.checked = true
  }
  else if (firstboxreload === 'none') {
    firstInput.style.textDecoration="none"
    firstCheckbox.checked = false
  }

const firstlocalStorageValue = localStorage.getItem('firstInput')
  firstInput.value=firstlocalStorageValue
  if(secondboxreload === 'line') {
    secondInput.style.textDecoration="line-through"
    secondCheckbox.checked = true
  }
  else if (secondboxreload === 'none') {
    secondInput.style.textDecoration="none"
    secondCheckbox.checked = false
  }

const secondlocalStorageValue = localStorage.getItem('secondInput')
  secondInput.value=secondlocalStorageValue
  if(thirdboxreload === 'line') {
    thirdInput.style.textDecoration="line-through"
    thirdCheckbox.checked = true
  }
  else if (thirdboxreload === 'none') {
    thirdInput.style.textDecoration="none"
    thirdCheckbox.checked = false
  }

const thirdlocalStorageValue = localStorage.getItem('thirdInput')
  thirdInput.value=thirdlocalStorageValue
  if(fourthboxreload === 'line') {
    fourthInput.style.textDecoration="line-through"
    fourthCheckbox.checked = true
  }
  else if (fourthboxreload === 'none') {
    fourthInput.style.textDecoration="none"
    fourthCheckbox.checked = false
  }

const fourthlocalStorageValue = localStorage.getItem('fourthInput')
  fourthInput.value=fourthlocalStorageValue
})
firstInput.addEventListener('input',()=>{
  localStorage.setItem('firstInput',firstInput.value)
  console.log(firstInput.value);
})

secondInput.addEventListener('input',()=>{
  localStorage.setItem('secondInput',secondInput.value)
  console.log(secondInput.value);
})

thirdInput.addEventListener('input',()=>{
  localStorage.setItem('thirdInput',thirdInput.value)
  console.log(thirdInput.value);
})

fourthInput.addEventListener('input',()=>{
  localStorage.setItem('fourthInput',fourthInput.value)
  console.log(fourthInput.value);
})
