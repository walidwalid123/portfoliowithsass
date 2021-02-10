import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from '../components/header';
import Footer from './Footer'
import Profile from '../../src/pages/Profile';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Services from '../pages/Services';


function App() {
  return (
    <Router>
        <Header/>
            <div className="container">
                <Switch>
                  <Route path="/" exact component={Profile} />
                  <Route path="/Services" exact component={Services}/>
                  <Route path="/Portfolio" exact component={Portfolio}/>
                  <Route path="/Contact" exact component={Contact}/>
                  <Route path="/About" exact component={About}/>
                </Switch>
            </div>
        <Footer/>
    </Router>
  );
}

export default App;
