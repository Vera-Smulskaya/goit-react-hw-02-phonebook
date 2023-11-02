import React, { Component } from 'react';
import Title from '../Title/Title';
import css from './ContactForm.module.css';
// import { computeHeadingLevel } from '@testing-library/react';

export default class ContactForm extends Component {
handleSubmit = event => {
  event.preventDefault();
  const name = event.currentTarget.elements.name.value;
  const number = event.currentTarget.elements.number.value;

  console.log("Form submit", name, number);
}

  render() {
    return (
      <div className={css.formContainer}>
        <Title>Contact Form</Title>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label className={css.formLabel}>
            <p  className={css.formLabelText}>Name: </p>
            <input type="text" className={css.formInput} name='name'></input>
          </label>
          <label>
            <p className={css.formLabelText}>Number: </p>
            <input type="number"  className={css.formInput} name='number'></input>
          </label>
          <button type="button" className={css.formButton}>Add contact</button>
        </form>
       </div>
    );
  }
}
