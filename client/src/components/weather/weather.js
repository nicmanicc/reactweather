import './weather.css';
import * as icons from "weather-icons-react";

//const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function Weather(props) {
    var dateTime = new Date(props.dateTime);
    //console.log(weekday[date.getDay()])
    const date = dateTime.getDate();
    const month = monthList[dateTime.getMonth()]

    //Split conditions received from API into lists so that appropriate icons
    //can be used for similar weather coniditions
    const sunnyConditions = ['clear'];
    const drizzleConditions = ['drizzle', 'heavy drizzle', 'light drizzle', 'heavy drizzle/rain', 'light drizzle/rain',
     'freezing drizzle/freezing rain', 'heavy freezing drizzle/freezing rain', 'light freezing drizzle/freezing rain'];
    const snowConditions = ['blowing or drifting snow', 'snow', 'snow showers', 'heavy snow', 'light snow'];
    const sleetConditions = ['heavy rain and snow', 'light rain and snow', 'snow and rain showers'];
    const fogConditions = ['fog', 'freezing fog'];
    const hailConditions = ['hail', 'hail showers'];
    const rainyConditions = ['rain', 'rain showers', 'heavy rain', 'light rain', 'precipitation in vicinity', 
    'heavy freezing rain', 'light freezing rain'];
    const dustyConditions = ['diamond dust', 'mist', 'duststorm'];
    const lightningConditions = ['lightning without thunder', 'thunderstorm without precipitation'];

    var weatherIcon;
    //Split in case there are two condition in one day, always show first
    var str = props.conditions.split(', ')
    var condition = str[0].toLowerCase();
    const imgSize = 64;
    const imgColor = 'black'
    if (sunnyConditions.includes(condition)) {
        weatherIcon = <icons.WiDaySunny size={imgSize} color={imgColor} />
    }
    if (drizzleConditions.includes(condition)) {
        weatherIcon = <icons.WiRainMix size={imgSize} color={imgColor} />
    }
    if (snowConditions.includes(condition)) {
        weatherIcon = <icons.WiSnow size={imgSize} color={imgColor} />
    }
    if (sleetConditions.includes(condition)) {
        weatherIcon = <icons.WiSleet size={imgSize} color={imgColor} />
    }
    if (fogConditions.includes(condition)) {
        weatherIcon = <icons.WiFog size={imgSize} color={imgColor} />
    }
    if (hailConditions.includes(condition)) {
        weatherIcon = <icons.WiHail size={imgSize} color={imgColor} />
    }
    if (rainyConditions.includes(condition)) {
        weatherIcon = <icons.WiRain size={imgSize} color={imgColor} />
    }
    if (dustyConditions.includes(condition)) {
        weatherIcon = <icons.WiDust size={imgSize} color={imgColor} />
    }
    if (lightningConditions.includes(condition)) {
        weatherIcon = <icons.WiLightning size={imgSize} color={imgColor} />
    }
    if (condition === 'thunderstorm') {
        weatherIcon = <icons.WiThunderstorm size={imgSize} color={imgColor} />
    }
    if (condition === 'partially cloudy') {
        weatherIcon = <icons.WiDayCloudy size={imgSize} color={imgColor} />
    }
    if (condition === 'overcast') {
        weatherIcon = <icons.WiCloudy size={imgSize} color={imgColor} />
    }
    if (condition === 'ice') {
        weatherIcon = <icons.WiSnowflakeCold size={imgSize} color={imgColor} />
    }
    if (condition === 'funnel cloud/tornado') {
        weatherIcon = <icons.WiTornado size={imgSize} color={imgColor} />
    }
    if (condition === 'smoke or haze') {
        weatherIcon = <icons.WiSmoke size={imgSize} color={imgColor} />
    }
    if (condition === 'squalls') {
        weatherIcon = <icons.WiCloudyWindy size={imgSize} color={imgColor} />
    }
    if (condition === 'sky coverage decreasing') {
        weatherIcon = <icons.WiCloudDown size={imgSize} color={imgColor} />
    }
    if (condition === 'sky coverage increasing') {
        weatherIcon = <icons.WiCloudUp size={imgSize} color={imgColor} />
    }
    if (condition === 'sky unchanged') {
        weatherIcon = <icons.WiCloudRefresh size={imgSize} color={imgColor} />
    }

    const handleOnClick = () => {
        props.handleSetToggledItem(props.index);
    }
    

    return (
        <div className='card' onClick={handleOnClick}>
            {weatherIcon}
            <h2>{date}</h2>
            <h3>{month}</h3>
            <p className='temp'>{props.temp}&deg;</p>
            <p className='tempMin'>{props.tempMin}&deg;</p>
            <p className='tempMax'>{props.tempMax}&deg;</p>
        </div>
    )
}

export default Weather;