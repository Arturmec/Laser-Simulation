import styled from 'styled-components';

export const Link = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: #808080;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs(() => ({
  type: 'submit',
}))`
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & + li {
      border-top: 1px solid #eee;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;