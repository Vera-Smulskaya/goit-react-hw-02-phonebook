import React, { Component } from 'react';
import css from './ContactList.module.css';
import ContactListItem from 'components/ContactListItem/ContactListItem';

export default class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
        <h2>Contacts</h2>
        {contacts.map(contact => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
      </div>
    );
  }
}
