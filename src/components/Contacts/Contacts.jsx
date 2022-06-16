import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, ContactList, ButtonDelete } from './Contacts.styled';

function Contacts({ contacts, onClick }) {
  return (
    <>
      <ContactList>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              {name}: {number}
              <ButtonDelete type="button" name={id} onClick={onClick}>
                Delete
              </ButtonDelete>
            </ContactItem>
          );
        })}
      </ContactList>
    </>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Contacts;
