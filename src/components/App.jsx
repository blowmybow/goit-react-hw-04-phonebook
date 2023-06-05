import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import initialContacts from './contacts.json';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Layout } from './Container/Container';
import { Header } from './Header/Header';
import { Section } from './Section/Section';

const notifyOptions = {
  position: 'bottom-left',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const contactsLS = JSON.parse(localStorage.getItem('contacts'));
    if (contactsLS) {
      this.setState({ contacts: contactsLS });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const existing = this.state.contacts.find(
      ({ name, number }) =>
        name.toLowerCase().trim() === newContact.name.toLowerCase().trim() ||
        number.trim() === newContact.number.trim()
    );
    if (existing) {
      return toast.error(
        `${newContact.name}: is already in contacts`,
        notifyOptions
      );
    }
    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.addContact} />
          <Header title="Contacts" />
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          />
        </Section>
        <ToastContainer />
      </Layout>
    );
  }
}
