import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
/*import StreamTransport from 'nodemailer/lib/stream-transport';
import { data } from 'jquery';

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
cons app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', () => {
  resizeBy.send('welcome to my forma')
})

app.post('/api/forma'(req, res)=>{
  let data = req.body
  let smtpTransport = nodemailer.createTransport({
    service: ''Gmail',
    port: 465,
    auth: {
      user: 'oscarjulian6@gmail.com',
      pass: 'Kata2202'
    }
  });
let mailOption={
  from:data.email,
  to:'oscarjulian6@gmail.com',
  subject:'Message from ${'data.name'},
  html: '

    <h3>Informations</h3>
  <ul >
  <li>Name: ${data.name}</li>
  <li>Lastame: ${data.lastname}</li>
  <li>Email: ${data.email}</li>
  </ul>

    <h3>Message</h3>
<p>${data.message}</p>
  '
  };

smtpTransport.sendMail(mailOptions, (error, response) => {
  
  if (error) {
    res.send(error)
  }
  else {
    res.send('success')
  }
})
smt
))
*/
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
