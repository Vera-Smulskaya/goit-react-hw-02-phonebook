import React, { Component } from 'react';
import css from './ContactListItem.module.css';

export default class ContactListItem extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div className={css.contactContainer}>
        <p className={css.contactName}>
          {contact.name}: <span className={css.contactNumber}>{contact.number}</span>
        </p>
        <button className={css.contactButton}>Delete</button>
      </div>
    );
  }
}
