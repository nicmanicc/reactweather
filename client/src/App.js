import React, {useState} from 'react';
import './App.css';

import Weather from './components/weather/weather';
import WeatherInfo from './components/weather/weatherInfo';

import axios from 'axios';


require('dotenv').config()
const {REACT_APP_OWM_KEY} = process.env;

function App() {
  const [inputClass, setInputClass] = useState('searchCountry')
  const [weatherData, setWeatherData] = useState([])
  const [toggledItem, setToggledItem] = useState(0);

  const handleSetLocation = (e) => {
    e.preventDefault()
    
    setInputClass('searchCountry moveSearchCountry') //create animation on form submit
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e.target.country.value}?unitGroup=metric&key=${REACT_APP_OWM_KEY}&contentType=json`)
      .then(res => {
        const data = res.data;
        console.log(data.days)
        setWeatherData(data.days)
      }).catch((error) => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
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
              console.log(weather)
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
                    />
                )
            }))
          }
          
          
        
        </div>
        {weatherData.length > 0 && <WeatherInfo/>}
        
      
        
        <form onSubmit={handleSetLocation}>
          <input id='countryInput' name='country' type='text' className={inputClass} placeholder='Enter city name'/>
        </form>
    </div>
  );
}

export default App;
