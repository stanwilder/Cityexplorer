import React from "react";
import Movies from "./Movies";

class Movie extends React.Component {
  render() {
    return (
      this.props.movieData.map((movie, idx) => <Movies key={idx} day={movie} />)
// help from justin (TA)
    )

  }
}

export default Movie;
