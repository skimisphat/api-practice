import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const film = this.props.film.map((film) => {
      return (
        <div className="card" key={film.id}>
          <div className="card-block">
            <h2 className="card-title">{film.title}</h2>
            <p className="card-text">
              {film.description.substr(0, 300) +
                (film.description.length > 300 ? "..." : "")}
            </p>
          </div>
          <dl className="list-group list-group-flush">
            <dt className="list-group-item">Director:</dt>
            <dd>{film.director}</dd>
            <dt className="list-group-item">Producer:</dt>
            <dd>{film.producer}</dd>
            <dt className="list-group-item">Released:</dt>
            <dd>{film.release_date}</dd>
          </dl>
        </div>
      );
    });
    return <div className="cards-container">{film}</div>;
  }
}
