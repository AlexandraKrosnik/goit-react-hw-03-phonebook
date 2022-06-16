import styled from 'styled-components';

export const InputStyled = styled.input`
  box-sizing: border-box;
  width: 250px;
  padding: 10px;

  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  :focus {
    border: 3px solid #555;
  }
`;

export const Title = styled.p`
  margin: 0;
  margin-bottom: 5px;
  font-size: 18px;
`;
