const button = document.getElementById("loc-btn");
const output = document.getElementById('output')  

function gotLocation(position) {
  fetchLocation(position.coords.latitude,position.coords.longitude)
}

function failedToGet() {
  console.log("There was some issue");
}
button.addEventListener("click", async () => {
   try {
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
  } catch (error) {
    console.log(error);
  }
});

const fetchLocation = async (lat,lon) => {
 try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
 const data = await response.json()
 output.innerHTML = data.display_name
 console.log(data);
 } catch (error) {
    console.log(error);
 }
}
