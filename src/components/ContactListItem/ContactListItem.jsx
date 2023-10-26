import React, { Component } from 'react';
import css from './ContactListItem.module.css';

export default class ContactListItem extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div>
        <p>
          {contact.name}: <span>{contact.number}</span>
        </p>
        <button>Delete</button>
      </div>
    );
  }
}
