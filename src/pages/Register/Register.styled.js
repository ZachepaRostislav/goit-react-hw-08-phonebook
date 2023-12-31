import styled from '@emotion/styled';

export const FormStyled = styled.form`
  width: 320px;
`;

export const LabelStyled = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;

  &:hover {
    color: red;
  }
`;
