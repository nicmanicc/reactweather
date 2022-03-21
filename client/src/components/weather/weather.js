import React from 'react';

function Weather(props) {
    return (
        <div>
            <p>{props.conditions}</p>
            <p>{props.dateTime}</p>
            <p>{props.temp}</p>
            <p>{props.tempMax}</p>
            <p>{props.tempMin}</p>
        </div>
    )
}

export default Weather;