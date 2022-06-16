import styled, { css } from 'styled-components';

export const ErrorText = styled.p`
  color: red;
  margin: 0;
  margin-top: 3px;
`;

export const StyledForm = css`
  box-sizing: border-box;
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px solid #a7a2a2b8;
`;

export const StyledField = css`
  box-sizing: border-box;
  width: 50%;
  padding: 10px;

  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  :focus {
    border: 3px solid #555;
  }
`;

export const FormSection = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const ButtonStyled = styled.button`
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: 'Amazon Ember', sans-serif;
  font-size: 13px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 100px;
  :hover {
    background-color: #f7fafa;
  }
  :focus {
    border-color: #0b256e;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
`;
