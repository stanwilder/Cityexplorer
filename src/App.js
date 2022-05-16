import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
    }
  }

  citySubmit = async (e) => {
    e.preventDefault();
    let apiUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q${this.state.city}&format=json`;
    let city = await axios.get(apiUrl);
    console.log(city);
  }
  
  render() {
    return (
      <>
      <Form>
        <Form.Label>Explore</Form.Label>
        <Button type="submit">
          Explore!
        </Button>
      </Form>
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