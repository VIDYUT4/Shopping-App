import React from 'react';
import './App.css';
import Header from 'Components/Header/Header';
import Home from 'Pages/Home';
import Login from 'Components/Login.jsx/Login';
import Navigation from 'helper/Navigation';
import AboutUs from 'Pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Login />
    </div>
  );
}


export default App;
