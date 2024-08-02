import styled, { css } from 'styled-components';

const formTypes = {
  post: css`
    input {
      padding-bottom: 4rem;
      width: 70%;
    }
  `,
};

const FormField = styled.div`
  margin: 1rem;
  padding-bottom: 1rem;
  input {
    border-radius: 4px;
    border: none;
    margin-left: 2rem;
  }
  ${(props) => formTypes[props.type]}
`;
export default FormField;
