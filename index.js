const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const image = document.querySelector('.icon');

async function getWeather(city){
    var res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14d25758efa47493dd112401c9f47e6f&units=metric`);
    if(res.status == 404){
        document.querySelector('.error').style.display="block";
    }else{
        document.querySelector('.error').style.display ="none";
    }
    var data = await res.json();
    console.log(data);
    document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + "°C";;
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidityP').innerHTML =Math.round(data.main.humidity) + "%";
    document.querySelector('.windS').innerHTML = Math.round(data.wind.speed) + "km/h";
    if(data.weather[0].main == "Clouds"){
        image.src = "./WeatherImages/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        image.src = "./WeatherImages/clear.png"
    }else if(data.weather[0].main == "Drizzle"){
        image.src = "./WeatherImages/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        image.src = "./WeatherImages/mist.png"
    }else if(data.weather[0].main == "Rain"){
        image.src = "./WeatherImages/rain.png"
    }
}
searchBtn.addEventListener('click', () =>{
    getWeather(searchInput.value);
})