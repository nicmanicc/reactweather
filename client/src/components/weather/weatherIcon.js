import * as icons from "weather-icons-react";

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


function WeatherIcon(props) {
    //Split in case there are two condition in one day, always show first
    var str = props.conditions.split(', ')
    var condition = str[0].toLowerCase();
    const imgSize = props.imgSize;
    const imgColor = 'white'; //props.imgColor
    if (sunnyConditions.includes(condition)) {
        return <icons.WiDaySunny size={imgSize} color={imgColor} />;
    }
    if (drizzleConditions.includes(condition)) {
        return <icons.WiRainMix size={imgSize} color={imgColor} />;
    }
    if (snowConditions.includes(condition)) {
        return <icons.WiSnow size={imgSize} color={imgColor} />;
    }
    if (sleetConditions.includes(condition)) {
        return <icons.WiSleet size={imgSize} color={imgColor} />;
    }
    if (fogConditions.includes(condition)) {
        return <icons.WiFog size={imgSize} color={imgColor} />;
    }
    if (hailConditions.includes(condition)) {
        return <icons.WiHail size={imgSize} color={imgColor} />;
    }
    if (rainyConditions.includes(condition)) {
        return <icons.WiRain size={imgSize} color={imgColor} />;
    }
    if (dustyConditions.includes(condition)) {
        return <icons.WiDust size={imgSize} color={imgColor} />;
    }
    if (lightningConditions.includes(condition)) {
        return <icons.WiLightning size={imgSize} color={imgColor} />;
    }
    if (condition === 'thunderstorm') {
        return <icons.WiThunderstorm size={imgSize} color={imgColor} />;
    }
    if (condition === 'partially cloudy') {
        return <icons.WiDayCloudy size={imgSize} color={imgColor} />;
    }
    if (condition === 'overcast') {
        return <icons.WiCloudy size={imgSize} color={imgColor} />;
    }
    if (condition === 'ice') {
        return <icons.WiSnowflakeCold size={imgSize} color={imgColor} />;
    }
    if (condition === 'funnel cloud/tornado') {
        return <icons.WiTornado size={imgSize} color={imgColor} />;
    }
    if (condition === 'smoke or haze') {
        return <icons.WiSmoke size={imgSize} color={imgColor} />;
    }
    if (condition === 'squalls') {
        return <icons.WiCloudyWindy size={imgSize} color={imgColor} />;
    }
    if (condition === 'sky coverage decreasing') {
        return <icons.WiCloudDown size={imgSize} color={imgColor} />;
    }
    if (condition === 'sky coverage increasing') {
        return <icons.WiCloudUp size={imgSize} color={imgColor} />;
    }
    if (condition === 'sky unchanged') {
        return <icons.WiCloudRefresh size={imgSize} color={imgColor} />;
    }
    return <icons.WiDaySunny size={imgSize} color={imgColor} />;
}

export default WeatherIcon;
