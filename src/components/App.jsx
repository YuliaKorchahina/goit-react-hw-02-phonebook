import { Component } from 'react';
import { Phonebook } from './Phonebook';
import { ContactsList } from './Contacts';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    return (
      <Container>
        <Phonebook onSave={this.addContact} />
        <ContactsList contacts={this.state.contacts}  />
        <GlobalStyle />
      </Container>
    );
  }
}
