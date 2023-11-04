import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import Title from './Title/Title';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (contactData) => {
 const hasDuplicates = this.state.contacts.some((contact) => contact.name === contactData.name);

  if(hasDuplicates) {
    alert(`Contact with name ${contactData.name} already exists`) 
    return;
  }

  const finalContact = {
    ...contactData,
    id: nanoid(),
  }

  this.setState({ contacts: [...this.state.contacts, finalContact]})
}

onFilter = (contactName) => {
  const filteredContacts = [...this.state.contacts]
  filteredContacts.filter(contact => {contact.toLowerCase().includes(contactName.toLowerCase())})
}

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <Section>
          <Title>Phonebook</Title>
            <ContactForm handleFormContact={this.handleAddContact}/>
        </Section>
        <Section>
          <Filter value={filter} onChange={this.onFilter}/>
          <ContactList contacts={contacts} />
        </Section>
      </div>
    );
  }
}
