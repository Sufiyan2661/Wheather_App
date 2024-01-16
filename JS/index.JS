const apikey = "ae5a066786831b6f0ce245ed7f383088";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")

async function checkwheather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
document.querySelector(".error").style.display = "block"
document.querySelector(".wheather").style.display = "none"
    }
    else{
        
        var data = await response.json()
        console.log(data)
        
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%"
        document.querySelector(".wind").innerHTML = data.wind.speed +" KMPH"
        
        const wheathericon = document.querySelector(".wheather-icon")
        
        
        const weathermain = data.weather[0].main.toLowerCase();
        
        if(weathermain =="clouds"){
            wheathericon.src ="/images/clouds.png";
        }
        else if (weathermain  == "clear"){
            wheathericon.src= "/images/clear.png";
        }
        else if (weathermain  == "rain"){
            wheathericon.src= "/images/rain.png"
        }
        else if(weathermain  == "drizzle"){
            wheathericon.src= "/images/drizzle.png"
        }
        else if (weathermain  == "mist"){
    wheathericon.src= "/images/mist.png"
}
document.querySelector(".wheather").style.display = "block"
}

}

searchbtn.addEventListener("click",()=>{
    checkwheather(searchbox.value)
})
