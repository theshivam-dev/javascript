const button = document.getElementById('click')
const userInput = document.getElementById('userInput')
const outputCountry = document.getElementById('outputCountry')
const temp = document.getElementById('temp')
const time = document.getElementById('time')

document.body.style.backgroundColor = 'black'
document.body.style.color = 'white'

button.addEventListener('click',()=>{
    const userIn = userInput.value 
  fetch(`https://api.weatherapi.com/v1/current.json?key=159d9ac7c6ba4ef4903150342250502&q=${userIn}&aqi=yes`)
  .then(response => response.json())
  .then(data => {
    outputCountry.innerHTML=data.location.region
    temp.innerHTML=data.current.temp_c
    time.innerHTML=data.location.localtime
    console.log(data)
  })  
})
