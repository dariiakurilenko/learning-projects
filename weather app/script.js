const container = document.querySelector('.container');
const search = document.querySelector('.search-box__btn');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = '96e14406eafc95a002abf8ad6f2323a0';
    const city = document.querySelector('.search-box input').value;
    if (city == '')
        return;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
        &units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
            
            if (json.cod == '404'){
                container.style.height =  '450px';
                weatherBox.classList.remove('active');
                weatherDetails.classList.remove('active');
                error404.classList.add('active');
                return;
            }

            container.style.height =  '555px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box__temperature');
            const description = document.querySelector('.weather-box__description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main){
                case 'Clear':
                    image.src = 'images/sun.svg';
                    break;
                case 'Rain':
                    image.src = 'images/rain.svg';
                    break;
                case 'Snow':
                    image.src = 'images/snow.svg';
                    break;
                case 'Clouds':
                    image.src = 'images/cloud.svg';
                    break;
                case 'Mist':
                    image.src = 'images/mist.svg';
                    break;
                case 'Haze':
                    image.src = 'images/mist.svg';
                    break;
                case 'Thunderstorm':
                    image.src = 'images/rain.svg';
                    break;
                default:
                    image.src = 'images/cloud.svg';
            }
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>℃</span>`
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
           
        });
});