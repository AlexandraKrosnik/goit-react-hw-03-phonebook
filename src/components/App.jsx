import { Component } from 'react';
import { ContactForm } from './Form/Form';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Section, Title } from './App.styled';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: '1AUcOuFAuOSXefevAGMTs', name: 'Sasha', number: '+380636772865' },
      { id: 'id-1', name: 'Rosie Simpson', number: '+380654591256' },
      { id: 'id-2', name: 'Hermione Kline', number: '+380654438912' },
      { id: 'id-3', name: 'Eden Clements', number: '+380656451779' },
      { id: 'id-4', name: 'Annie Copeland', number: '+380652279126' },
    ],
    name: '',
    filter: '',
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

  onChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  clearFilter = () => {
    this.setState({
      filter: '',
    });
  };

  onfilterContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  onContactDelete = e => {
    console.log(e.target.name);
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(c => c.id !== e.target.name)],
    }));
  };

  render() {
    return (
      <>
        <Section>
          <Title>Phonebook</Title>
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section>
          <Title>Contacts</Title>
          <Filter
            OnChange={this.onChangeFilter}
            onBlur={this.clearFilter}
          ></Filter>
          <Contacts
            contacts={
              this.state.filter.length === 0
                ? this.state.contacts
                : this.onfilterContact()
            }
            onClick={this.onContactDelete}
          ></Contacts>
        </Section>
      </>
    );
  }
}
