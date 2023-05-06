import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import { Container } from './Container.styled';
import ContactList from 'components/ContactList/ContactList';
class App extends React.Component {
  state = {
    contacts: [],
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
