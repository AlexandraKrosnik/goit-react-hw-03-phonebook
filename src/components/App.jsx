import { render } from '@testing-library/react';
import { Component } from 'react';
import { ContactForm } from './Form/Form';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: '1AUcOuFAuOSXefevAGMTs', name: 'Sasha', number: '+380636772865' },
    ],
    name: '',
  };
  addContact = ({ name, number }) => {
    let id = nanoid();
    let contact = {
      id,
      name,
      number,
    };
    console.log();
    this.isInListContacts(contact)
      ? alert(`${name} is already in contacts!`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };
  isInListContacts = contact => {
    return !!this.state.contacts.find(
      c => c.name === contact.name && c.number === contact.number
    );
  };

  render() {
    return (
      <>
        <ContactForm addContact={this.addContact} />
        <Contacts contacts={this.state.contacts}></Contacts>
      </>
    );
  }
}
