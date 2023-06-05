import React from 'react';
import PropTypes from 'prop-types';

import { List, Item, Span, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <Span>{name} :</Span>
            <Span>{number}</Span>
            <Button type="button" onClick={() => onDelete(id)}>
              delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
