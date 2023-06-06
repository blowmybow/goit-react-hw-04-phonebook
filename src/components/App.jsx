import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';

import initialContacts from './contacts.json';
import useLocalStorage from '../hooks/useLocalStorage';
import { notifyOptions } from '../notify/NotifyOptions.jsx';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Layout } from './Container/Container';
import { Header } from './Header/Header';
import { Section } from './Section/Section';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const existing = contacts.find(
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
    setContacts(contacts => [{ ...newContact, id: nanoid() }, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase().trim());
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm onAddContact={addContact} />
        <Header title="Contacts" />
        <Filter value={filter} onChange={changeFilter} />
        <ContactList onDelete={deleteContact} contacts={getVisibleContacts()} />
      </Section>
      <ToastContainer />
    </Layout>
  );
}
