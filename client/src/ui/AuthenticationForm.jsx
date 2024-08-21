import styled from 'styled-components';

const AuthenticationForm = styled.form`
  display: flex;
  flex-direction: column;

  input,
  select {
    height: 2.3rem;
    width: 100%;
    border-radius: 4px;
    border: none;
    outline-color: var(--color-green-100);
  }
  input:valid {
    outline-color: #0a9500;
  }
  input:invalid {
    outline-color: #ff0000;
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
