import React from 'react';
import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { About } from './pages/about';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const appName = "AppName";
  return (
    <div className="App">
      <Router>
        <h1>{appName}</h1>
        {/* header uses props */}
        <Header title="header1" />
        <Header title="header2" />
        {/* Footer uses state */}
        <Footer />
        <Switch>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
