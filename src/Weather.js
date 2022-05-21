import React from "react";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  render() {
    return (
      this.props.weatherData.map((day, idx) => <WeatherDay key={idx} day={day} />)
// help from justin (TA)
    )

  }
}

export default Weather;
