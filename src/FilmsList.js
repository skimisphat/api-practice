import React, { Component } from "react";
import Card from "./Card";

export default class FilmsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }
  // This is not the best place to have my api call... 
  componentDidMount() {
    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(handleErrors)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        // Let's try to get only H Miyazaki films because those are my favorite
        let film = data.filter(data=> data.director === "Hayao Miyazaki");
        this.setState({ films: film });
      })
      .then((response) => console.log("ok"))
      .catch((error) => console.log(error));

  }
  render() {
    return (
      <div>
        <Card film={this.state.films} />
      </div>
    );
  }
}
