import React from 'react';
import './App.css';
import  Header  from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  const appName = "H";
  return (
    <div className="App">
      <h1>{appName}</h1>
      {/* header uses props */}
      <Header title="header1" />
      <Header title="header2" />
      {/* Footer uses state */}
      <Footer />
    </div>
  );
}

export default App;
