import styled from 'styled-components';

const AuthenticationForm = styled.form`
  padding-top: 2rem;
  padding-left: 1rem;

  display: flex;
  flex-direction: column;

  input {
    height: 2rem;
    margin-right: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    border: none;
  }
  label {
    margin-top: 1rem;
  }
  button {
    align-self: center;
    margin: 2rem 0 2rem 0;
  }
`;
export default AuthenticationForm;
