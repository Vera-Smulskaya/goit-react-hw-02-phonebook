import React, { Component } from 'react';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  render() {
    return (
      <div>
        <h2>Contact Form</h2>
        <form>
          <label>
            <p>Name: </p>
            <input type="text"></input>
          </label>
          <label>
            <p>Number: </p>
            <input type="number"></input>
          </label>
        </form>
      </div>
    );
  }
}
