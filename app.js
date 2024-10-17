const apikey="20d14d1f9516526c0091b213499410f9";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiurl + city +`&appid=${apikey}`);
  var data = await response.json();
  if(response.status == 404){ 
    
    alert("Invalid city name!");
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
  document.querySelector(".wind").innerHTML = data.wind.speed+" km/hr";

if(data.weather[0].main == "clouds"){
     weatherIcon.src ="images/clouds.png";
      
   }
  else if(data.weather[0].main == "Rain"){
     weatherIcon.src ="images/rain.png";
   }
  else if(data.weather[0].main == "Clear"){
     weatherIcon.src ="images/clear.png"; 
   }
  else if(data.weather[0].main == "Mist"){
     weatherIcon.src ="images/Mist.png";
   }
  else if(data.weather[0].main == "Snow"){
     weatherIcon.src ="images/Snow.png"; 
   }
  else if(data.weather[0].main == "Drizzle"){
     weatherIcon.src ="images/drizzle.png";
   }
  document.querySelector(".weather").style.display ="block";
  
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

