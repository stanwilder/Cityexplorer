import React from "react";
import Card from "react-bootstrap/Card";

class Weather extends React.Component {
render () {
  return(
    <>
    <Card>
      <Card.Body>
        <Card.Text>Latitude: {this.props.lon}</Card.Text>
        <Card.Text>Longitude: {this.props.lat}</Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}



}

export default Weather;
