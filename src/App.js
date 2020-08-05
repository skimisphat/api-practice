import React from 'react';
import FilmsList from './FilmsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Studio Ghibli Ipsum</h1> 
      </header>
      <FilmsList />
      //To ipsum, we need to combine all titles into one json object split at each space
    </div>
  );
}

export default App;
