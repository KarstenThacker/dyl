import React from 'react';
import "./components/layouts/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
// React Router Import
import { Switch, Route} from 'react-router-dom';
//Import Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import PageNotFound from './components/pages/PageNotFound';

function App(){
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route component={PageNotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
