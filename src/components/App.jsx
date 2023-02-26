import { Component } from 'react';
import { Phonebook } from './Phonebook';
import { ContactsList } from './Contacts';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container.styled';
import data from './data.json';
import { Filter } from './Filter';
export class App extends Component {
  state = {
    contacts: data,
    filter: '',
    name: '',
    number: '',
  };

  addContact = newContact => {
    this.state.contacts.filter(contact => contact.name === newContact.name)
      .length
      ? alert(`${newContact.name} is already in contacts 👀`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();

    const filtredData = this.state.contacts.filter(contacts =>
      contacts.name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return (
      <Container>
        <Phonebook onSave={this.addContact} />
        <Filter onChange={this.onFilter} value={this.filter} />
        <ContactsList contacts={filtredData} onDelete={this.onDelete} />
        <GlobalStyle />
      </Container>
    );
  }
}

