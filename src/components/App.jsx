import { Component } from 'react';
import { ContactForm } from './Form/Form';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Section, Title } from './App.styled';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsContacts = JSON.parse(contacts);
    !!contacts && this.setState({ contacts: parsContacts });
  }
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    let id = nanoid();
    let contact = {
      id,
      name,
      number,
    };
    this.isInListContacts(contact)
      ? alert(`${name} is already in contacts!`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  isInListContacts = contact => {
    return !!this.state.contacts.find(
      c => c.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  onChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  /*clearFilter = () => {
    this.setState({
      filter: '',
    });
  };*/

  onfilterContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  onContactDelete = e => {
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
            value={this.state.filter}
            onChange={this.onChangeFilter}
          ></Filter>
          {this.onfilterContact().length === 0 ? (
            <p>
              There is no contact
              {!!this.state.contacts.length ? ' with this name' : ''}!
            </p>
          ) : (
            <Contacts
              contacts={this.onfilterContact()}
              onClick={this.onContactDelete}
            ></Contacts>
          )}
        </Section>
      </>
    );
  }
}
