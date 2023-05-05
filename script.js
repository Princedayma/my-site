

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '736df0f722msh3f96ed4f5ecb5efp1736f7jsn5158b2d24857',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	const cityUrl = url + `?city=${city}`;
    
	cityName.innerHTML = city

	fetch(url, options)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.error(error));
	
fetch(url, options)
  .then(response => response.json())
  .then(response => {
    //Cloud_pct.innerHTML = response.Cloud_pct;
    Fills_like.innerHTML = response.Fills_like;
    Humidity.innerHTML = response.Humidity;
    Max_temp.innerHTML = response.Max_temp;
    Min_temp.innerHTML = response.Min_temp;
    Sunrise.innerHTML = response.Sunrise;
    Sunset.innerHTML = response.Sunset;
    Temp.innerHTML = response.Temp;
    Wind_degrees.innerHTML = response.Wind_degrees;
    Wind_speed.innerHTML = response.Wind_speed;
})
.catch(error => console.error(error));

}
          submit.addEventListener("click", (e)=>{
			e.preventDefult()
			getWeather(city.value)
		  })

		 getWeather("Delhi")