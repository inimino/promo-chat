import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const promo = 1; // change to your own promo id
const baseUrl = "https://wagon-chat.herokuapp.com/";

var messages=[{},{}];

function render(){
  ReactDOM.render(<App messages={messages}/>, document.getElementById('root'));
}

function get_messages(){
  // use fetch() here
}

window.get_messages = get_messages;

function send_message(message){
  // use fetch() here
  alert(JSON.stringify(message)+' should be posted to the server');
}

window.send_message = send_message;

registerServiceWorker();

render();
