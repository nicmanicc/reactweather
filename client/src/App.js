import React, {useState} from 'react';
import './App.css';
import axios from 'axios';


require('dotenv').config()
const {REACT_APP_OWM_KEY} = process.env;

function App() {
  const [location, setLocation] = useState('')
  const [inputClass, setInputClass] = useState('searchCountry')

  const handleSetLocation = async (e) => {
    e.preventDefault()
    
    setLocation(e.target.country.value)

    setInputClass('searchCountry moveSearchCountry')
    
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${REACT_APP_OWM_KEY}&contentType=json`)
      .then(res => {
        const data = res.data;
        console.log(data)
      })
  }

  return (
    <div>
        <form onSubmit={handleSetLocation}>
          <input id='countryInput' name='country' type='text' className={inputClass} placeholder='Enter city name'/>
        </form>
    </div>
  );
}

export default App;
