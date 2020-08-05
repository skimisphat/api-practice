import React from 'react';
import FilmsList from './FilmsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Studio Ghibli Hayao Miyazaki Films</h1> 
      </header>
      <FilmsList />
    </div>
  );
}

export default App;
