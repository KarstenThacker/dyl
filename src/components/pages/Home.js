import React, { Component } from "react";
import Jumbotron from "../../components/layouts/Jumbotron.js";
import Accordd from "../layouts/Faq.js";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import img26 from "./img/img26.jpg";
class Home extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${img26})` }}>
        <Jumbotron />
        <h2>Home page</h2>
        <p>
          DIRECT YOUR LIFE understands that correctional institutions have
          become a melting pot of untapped potential. Over 90% of inmates arrive
          at these institutions without a high school diploma, while over 70%
          have never made it past the ninth grade. Once equipped with the proper
          life skills, education and reintegration coaching, the potential for a
          successful reintegration back to society is more likely.
        </p>
        <p>
          Our objective is to make positive changes in the community through a
          Restorative Approach. This approach is essential to produce a real and
          lasting transformation in the lives of individuals. DIRECT YOUR LIFE
          coaches these individuals on building good habits that foster success,
          while also providing meaningful connections and a positive support
          system.
        </p>

        <h2>Frequently Asked Questions (FAQs)</h2>
        <Accordd />
        <br />
        <br />
        <br />
        <h2>Subscribe to our Newsletter</h2>
        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        <br />
        <br />
      </div>
    );
  }
}

export default Home;
