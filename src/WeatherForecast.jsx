import "./WeatherForecast.css"

const WeatherForecast = ({weather}) => {
    
      return (
        <div className="weather">
  <h2>Day of the Week</h2>
  <img src={weather.img} alt={weather.imgAlt} />
  <p><span>conditions: {weather.conditions} </span>current weather conditions</p>
  <p><span>time: {weather.time} </span>time of day</p>
</div>
      );
    };
    


    export default WeatherForecast;