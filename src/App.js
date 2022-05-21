import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Weather from './Weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      lat: '',
      lon: '',
      error: false,
      forecast: [],
      showForecast: false,
      showMap: true,


    }
  }

  cityUpdate = (e) => {
    this.setState({
      cityName: e.target.value
    })
  }
  citySubmit = async (e) => {
    e.preventDefault();
    try {

      let locationUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.cityName}&format=json`
      let city = await axios.get(locationUrl);
      // console.log(locationUrl);

      let weatherUrl = (`${process.env.REACT_APP_SERVER}/weather?city=${this.state.cityName}&lat=${city.data[0].lat}&lon=${city.data[0].lon}&format=json`);
      console.log(weatherUrl);
      let weather = await axios.get(weatherUrl);

      this.setState({
        lon: city.data[0].lon,
        lat: city.data[0].lat,
        displayName: city.data[0].display_name,
        forecast: weather.data,
        showForecast: true,
        showMap: true,
      })
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }


  render() {

    return (
      <>
        <Form onSubmit={this.citySubmit}>
          <Form.Label>Explore</Form.Label>
          <Form.Control onChange={this.cityUpdate} type="text" placeholder="City Name" />
          <Button type="submit">
            Explore!
          </Button>
        </Form>

        {this.state.error
          ?
          <p>{this.state.errorMessage}</p>
          :
          null
        }

        <Card>
          <Card.Body>
            <Card.Title>{this.cityName}</Card.Title>
            <Card.Text>{this.state.lon}, {this.state.lat}, {this.state.displayName}</Card.Text>
          </Card.Body>

        </Card>
        <Card> 
          {this.state.showMap && 
          <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=13`
        } />}
        </Card>

        { this.state.showForecast &&
          <Weather
            weatherData={this.state.forecast}
          />

        }
      </>
    )
  }
}

export default App;
