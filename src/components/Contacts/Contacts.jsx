import React from 'react';

function Contacts({ contacts }) {
  return (
    <>
      <h2> Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Contacts;
