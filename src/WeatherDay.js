import React from "react";
import Card from "react-bootstrap/Card";

class WeatherDay extends React.Component {
render() {
  return (
    <Card>
          <Card.Body>
            <Card.Text>High: {this.props.day.high}</Card.Text>
            <Card.Text>Low: {this.props.day.low}</Card.Text>
            <Card.Text>Forecast: {this.props.day.description}</Card.Text>
          </Card.Body>
        </Card>

  )
}

}

export default WeatherDay;