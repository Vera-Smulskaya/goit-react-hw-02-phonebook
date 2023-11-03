import React, { Component } from 'react';
import Title from '../Title/Title';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
state = {
  name: "",
  number: "",
}

handleSubmit = event => {
  event.preventDefault();

  const contactData = {
    name: this.state.name,
    number: Number.parseFloat(this.state.number),
  }

  this.props.handleFormContact(contactData);
 }

handleInputChange = event => {
const value = event.target.value;
const name = event.target.name;

  this.setState({[name]: value })
}

  render() {
    return (
      <div className={css.formContainer}>
        <Title>Contact Form</Title>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label className={css.formLabel}>
            <p  className={css.formLabelText}>Name: </p>
            <input type="text" className={css.formInput} name='name' value={this.state.name} onChange={this.handleInputChange} required></input>
          </label>
          <label className={css.formLabel}>
            <p className={css.formLabelText}>Number: </p>
            <input type="tel"  className={css.formInput} name='number'  value={this.state.number} onChange={this.handleInputChange} required pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$" title="Format: xxx-xxx-xx-xx"></input>
          </label>
          <button type="submit" className={css.formButton}>Add contact</button>
        </form>
       </div>
    );
  }
}
