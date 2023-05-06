import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import { Container } from './Container.styled';
import ContactList from 'components/ContactList/ContactList';
class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => {
      return {
        contacts: prevState.contacts.concat(newContact),
      };
    });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact} />

        <h2>Contacts </h2>
        {/* <Filter />  */}
        <ContactList contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
