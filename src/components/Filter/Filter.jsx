import React from 'react';
import PropTypes from 'prop-types';
import { InputStyled, Title } from './Filter.styled';

export default function Filter({ OnChange, onBlur }) {
  return (
    <>
      <Title>Find contacts by name</Title>
      <InputStyled type="text" onChange={OnChange} onBlur={onBlur} />
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
