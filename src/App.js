import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import axios from 'axios';
import Card  from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      lat: 0,
      lon: 0,
      error: false
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

      let apiUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.cityName}&format=json`
      
      
      console.log(apiUrl)
      let city = await axios.get(apiUrl);
      this.setState({
        lon: city.data[0].lon,
        lat: city.data[0].lat,
        displayName: city.data[0].display_name
        
      })
    } catch (error) {
      this.setState ({
        error: true,
        errorMessage: error.message
      })
    }
  }
  
  
  render() {
    
    let mapUrl =  `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=13`
    return (
      <>
      <Form onSubmit={this.citySubmit}>
        <Form.Label>Explore</Form.Label>
        <Form.Control onChange={this.cityUpdate} type="text" placeholder="City Name"/>
        <Button type="submit">
          Explore!
        </Button>
      </Form>

      { this.state.error 
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
      <Card.Img src={mapUrl} />
    </Card>
      </>
      );
    
  }
  }
    export default App;
    
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>