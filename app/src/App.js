import React from 'react';
import './App.css';
import AirportInfo from './components/AirportInfo';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header title="Fly-Hy: Flight Options"></Header>
      <AirportInfo></AirportInfo>
      <Footer title="2021"></Footer>
    </div>
  );
}

export default App;