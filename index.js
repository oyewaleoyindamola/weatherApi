document.title = "WEATHER APP"

const cityname = document.getElementById("name");
const input = document.getElementById("input");
const display = document.getElementById("display");
const description = document.getElementById("description");
const temperature = document.getElementById("temp");

input.addEventListener("change", (e) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=4489a473e3cf8c68ce08894597e70222`
    
    fetch(url).then(response => {
        return response.json();
    })
    .then(data =>{
        console.log(data);
        cityname.textContent = data.name
        display.textContent += data.main.humidity
        description.textContent += data.weather[0].description
        temperature.textContent += data.main.temp
        
    })
});