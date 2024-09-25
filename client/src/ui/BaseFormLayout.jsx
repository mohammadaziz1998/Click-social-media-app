import styled from 'styled-components';

const BaseFormLayout = styled.div`
  width: min(650px, 100%);
  background-color: var(--color-green-100);
  border-radius: 10px;
  /* margin: 1rem; */
  padding: 2rem;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  margin: 1rem auto;

  button {
    margin-top: 1rem;
  }
`;

export default BaseFormLayout;
