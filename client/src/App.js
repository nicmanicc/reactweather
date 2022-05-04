import React, {useState} from 'react';
import './App.css';

import Weather from './components/weather/weather';
import WeatherInfo from './components/weather/weatherInfo';
import Logo from './assets/ReactWeatherIcon.png';
import axios from 'axios';


require('dotenv').config()
const {REACT_APP_OWM_KEY} = process.env;

function App() {
  const [inputClass, setInputClass] = useState('searchCountry')
  const [logoClass, setLogoClass] = useState('mainLogo')
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState([])
  const [toggledItem, setToggledItem] = useState(0);

  const handleSetLocation = (e) => {
    e.preventDefault()
    
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e.target.country.value}?unitGroup=metric&key=${REACT_APP_OWM_KEY}&contentType=json`)
      .then(res => {
        const data = res.data;
        setWeatherData(data.days)
        setInputClass('searchCountry moveOnSubmit') //Apply animation to move search bar to top of page
        setLogoClass('mainLogo miniLogo') //Apply animation to move logo to top of page
      }).catch((error) => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            setError(true) //Show input error
            setTimeout(() => {setError(false)}, 5000);
        } else if (error.request) {
            //no response from server
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }})
  }

  const handleSetToggledItem = (index) => {
    setToggledItem(index);
  }


  return (
    <div>
        <div className='flexContainer'>
          {
            weatherData.length > 0 && (weatherData.map((weather, index) => {
              return (
                  <Weather
                    key={index}
                    index={index}
                    toggleItem={toggledItem}
                    conditions={weather.conditions}
                    dateTime={weather.datetime}
                    temp={weather.temp}
                    tempMax={weather.tempmax}
                    tempMin={weather.tempmin}
                    handleSetToggledItem={handleSetToggledItem}
                    delay={`${index / 6}s`}
                    />
                )
            }))
          }
          
          
        
        </div>
        {weatherData.length > 0 && <WeatherInfo hours={weatherData[toggledItem].hours}/>}
        
      
        <img className={logoClass} src={Logo} alt='React Weather'/>
        <form onSubmit={handleSetLocation}>
          <div className={inputClass}>
            <input id='countryInput' name='country' type='text' className='locationInput' autoFocus autoComplete='off'/>
            {error && <p style={{color: 'red'}}>*Please enter a valid location</p>}
          </div>
        </form>
    </div>
  );
}

export default App;
