const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector('#weather');
    // const API = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
}

const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `${data.message}`;
        return;
    }
    weather.innerHTML = `
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
      <h1>${data.name}</h1>
      <h3><span>${data.main.temp}</span>&deg;C</h3>
      <h1 class="lead">${data.weather[0].main}</h1>     
    `
}

form.addEventListener('submit', (e) => {
    getWeather(search.value);
    e.preventDefault();
})

