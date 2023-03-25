const conatiner = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherbox = document.querySelector('.weather-box');
const weatherdetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const image= document.querySelector('.weather-box img');

search.addEventListener('click', () =>{
    const APIKey = '394ee0301abae60cb97cf3792bbc020a';
    const city = document.querySelector('.search-box input').value;

    city.value = 'nagpur';
    // if (city === '')
    // return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(Response => Response.json()).then
    (json =>{

        if (json.cod === '404'){
            conatiner.style.height = '400px';
            weatherbox.style.display= 'none';
            weatherdetails.style.display='none';
            error404.style.display='block';
            error404.classList.add('fadeIn');
            image.src = './404.png';
            return;  
        }

        error404.style.display='none';
        error404.classList.remove('fadeIn');

        const temperature =document.querySelector('.weather-box .temprature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        console.log(json)
        switch (json.weather[0].main) {
            case 'Clear':
                image.src = './clear.png';
                break;

            case 'Rain':
                image.src = './rain.png';
                break;

            case 'Snow':
                image.src = './snow.png';
                break;

            case 'Clouds':
                image.src = './cloud.png';
                break;

            case 'Haze':
                image.src = './mist.png';
                break;

            default:
                image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherbox.style.display = '';
        weatherdetails.style.display = '';
        weatherbox.classList.add('fadeIn');
        weatherdetails.classList.add('fadeIn');
        conatiner.style.height = '590px';


    });


});