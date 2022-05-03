import './weather.css';
import WeatherIcon from './weatherIcon';
import {useRef} from 'react';

const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function Weather(props) {
    var dateTime = new Date(props.dateTime);
    
    const date = dateTime.getDate();
    const month = monthList[dateTime.getMonth()]
    const fadeInCard = {
        animationName: 'fadeInOpacity',
        animationDelay: props.delay,
        animationDuration: '1s',
        animationFillMode: 'forwards'
    }

    const myRef = useRef(null);

    const handleOnClick = () => {
        props.handleSetToggledItem(props.index);
        myRef.current.scrollIntoView({'behavior': 'smooth', "inline": "center"});
    }
    
    if (props.toggleItem === props.index) {
        var focused = 'focused card';
    } else {
        focused = 'card'
    }

    return (
        <div ref={myRef} style={fadeInCard} className={focused} onClick={handleOnClick}>
            <WeatherIcon
                conditions={props.conditions}
                imgSize={64}
                imgColor={'black'}
            />
            <h2>{date}</h2>
            <h3>{month}</h3>
            <p className='temp'>{props.temp}&deg;</p>
            <p className='tempMin'>{props.tempMin}&deg;</p>
            <p className='tempMax'>{props.tempMax}&deg;</p>
        </div>
    )
}

export default Weather;