import React from 'react';
import PropTypes from 'prop-types';
import { InputStyled, Title } from './Filter.styled';

export default function Filter({ onChange, value }) {
  return (
    <>
      <Title>Find contacts by name</Title>
      <InputStyled type="text" onChange={onChange} value={value} />
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,

  value: PropTypes.string.isRequired,
};
