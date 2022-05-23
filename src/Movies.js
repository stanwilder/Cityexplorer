import React from "react";
import Card from "react-bootstrap/Card";

class Movies extends React.Component {
render() {
  return (
    <Card>
          <Card.Body>
            <Card.Text>{this.props.movie.title}</Card.Text>
            <Card.Text>{}</Card.Text>
            <Card.Text>{}</Card.Text>
          </Card.Body>
        </Card>

  )
}

}

export default Movies;