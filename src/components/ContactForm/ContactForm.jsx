import React, { Component } from 'react';
import Title from '../Title/Title';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  render() {
    return (
      <div className={css.formContainer}>
        <Title>Contact Form</Title>
        <form className={css.form}>
          <label className={css.formLabel}>
            <p  className={css.formLabelText}>Name: </p>
            <input type="text" className={css.formInput}></input>
          </label>
          <label>
            <p className={css.formLabelText}>Number: </p>
            <input type="number"  className={css.formInput}></input>
          </label>
          <button type="button" className={css.formButton}>Add contact</button>
        </form>
      </div>
    );
  }
}
