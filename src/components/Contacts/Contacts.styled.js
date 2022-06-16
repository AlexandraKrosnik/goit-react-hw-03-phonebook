import styled from 'styled-components';

export const ContactList = styled.ul`
  box-sizing: border-box;
  padding: 0;
  padding-left: 20px;
`;

export const ContactItem = styled.li`
  font-size: 18px;
  :not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const ButtonDelete = styled.button`
  margin-left: 20px;
  background-color: #f0efef;
  border: 0 solid #e2e8f0;
  border-radius: 1.5rem;
  box-sizing: border-box;
  color: #0d172a;
  cursor: pointer;
  display: inline-block;
  font-family: 'Basier circle', -apple-system, system-ui, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1;
  padding: 7px 15px;
  text-align: center;
  text-decoration: none #0d172a solid;
  text-decoration-thickness: auto;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    background-color: #1e293b;
    color: #fff;
  }
`;
