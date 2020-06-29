import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/layouts/Navbar";
import "./components/layouts/Navbar.css";
import Footer from "./components/layouts/Footer";
import "./components/layouts/Footer.css";

// React Router Import
import { Switch, Route } from "react-router-dom";
//Import Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./components/pages/About.css";
//import Programs from "./components/pages/Programs";
import Resources from "./components/pages/Resources";
//import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Form from "./components/pages/Form";
import PageNotFound from "./components/pages/PageNotFound";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <div>
      <Navbar />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resources" component={Resources} />
          <Route path="/services" component={Services} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/form" component={Form} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
