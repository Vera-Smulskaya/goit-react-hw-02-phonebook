import React, { Component } from 'react';
import Title from '../Title/Title';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  render() {
    return (
      <div>
       
       <Title>Contact Form</Title>
        <form>
          <label>
            <p>Name: </p>
            <input type="text"></input>
          </label>
          <label>
            <p>Number: </p>
            <input type="number"></input>
          </label>
          <button type="button">Add contact</button>
        </form>
      </div>
    );
  }
}
