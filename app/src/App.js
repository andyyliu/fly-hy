import React from 'react';
import './App.css';
import FlightInfo from './components/FlightInfo';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title="Fly-Hy: Flight Options"></Header>
      <FlightInfo></FlightInfo>
    </div>
  );
}

export default App;