import './weatherInfo.css';

function WeatherInfo(props) {

    let array = props.hours.filter((i,j) => j % 3 == 0);
    console.log(array)

    return (
        <div className='weatherInfo'>
            <table>
                <tr>
                    <th>Time</th>
                    <th>Condition</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Snow</th>
                    <th>Snow depth</th>
                    <th>Visibility</th>
                    <th>Wind speed</th>
                </tr>
                {array.map((hour, i) => {
                    return (
                        <tr key={i}>
                            <td>{hour.datetime}</td>
                            <td>{hour.conditions}</td>
                            <td>{hour.temp}</td>
                            <td>{hour.pressure}</td>
                            <td>{hour.snow}</td>
                            <td>{hour.snowdepth}</td>
                            <td>{hour.visibility}</td>
                            <td>{hour.windspeed}</td>
                        </tr>
                    )
                })

                }
            </table>
        </div>
    )
}

export default WeatherInfo;