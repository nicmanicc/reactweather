import './weatherInfo.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function WeatherInfo(props) {

    let array = props.hours.filter((i,j) => j % 2 === 0);

    const CustomToolTip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
                <p className='label'>{label}</p>
                <p>Temperature: {payload[0].value}&#8451;</p>
                <p>Wind: {payload[1].value} km/h</p>
                <p>Precipitation: {payload[2].value}%</p>
            </div>
          );
        }
      
        return null;
      };
    return (
        <div className='weatherInfo'>
            <ResponsiveContainer width='100%' height='80%'>
                <LineChart data={array}>
                    <Line name='Temperature' type="monotone" dataKey="temp" stroke="orange" />
                    <Line name='Wind Speed' type="monotone" dataKey="windspeed" stroke="#03e5b7" />
                    <Line name='Precipitation Probability' type="monotone" dataKey="precipprob" stroke="#037ade" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="datetime" stroke='#ccc'/>
                    <YAxis stroke='#ccc'/>
                    <Tooltip content={CustomToolTip}/>
                    <Legend verticalAlign="bottom" height={36}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default WeatherInfo;