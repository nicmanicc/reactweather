import React, {useState} from 'react';
import './App.css';

import Weather from './components/weather/weather';

import axios from 'axios';


require('dotenv').config()
const {REACT_APP_OWM_KEY} = process.env;

function App() {
  const [inputClass, setInputClass] = useState('searchCountry')
  const [weatherData, setWeatherData] = useState([])

  const handleSetLocation = (e) => {
    e.preventDefault()
    
    setInputClass('searchCountry moveSearchCountry') //create animation on form submit
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e.target.country.value}/next6days?unitGroup=metric&key=${REACT_APP_OWM_KEY}&contentType=json`)
      .then(res => {
        const data = res.data;
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

  return (
    <div>
        {weatherData.length > 0 && (weatherData.map((weather) => {
          console.log(weather)
          return (<Weather
            key={weather.datetime}
            conditions={weather.conditions}
            dateTime={weather.datetime}
            temp={weather.temp}
            tempMax={weather.tempMax}
            tempMin={weather.tempMin}
            /> )
        }))
        }
        <form onSubmit={handleSetLocation}>
          <input id='countryInput' name='country' type='text' className={inputClass} placeholder='Enter city name'/>
        </form>
    </div>
  );
}

export default App;
