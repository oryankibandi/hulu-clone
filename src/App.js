import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';

function App() {
  return (
    <div className="app">

     <Header/>
     {/* Header */}
    <Nav />
     {/* Nav bar */}
    <Results />
     {/* results */}
    </div>
  );
}

export default App;
