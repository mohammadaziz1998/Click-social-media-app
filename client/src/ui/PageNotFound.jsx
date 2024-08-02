import styled from 'styled-components';
import FormLayout from '../ui/FormLayout';

const StyledErrorDiv = styled.div`
  width: 400px;
  height: 200px;
  background-color: #d2776d;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  text-align: center;
`;
const StyledErrorBox = styled.div``;

function PageNotFound() {
  return (
    <FormLayout>
      <StyledErrorDiv>
        <StyledErrorBox>
          <h1>Something went wrong</h1>
        </StyledErrorBox>
      </StyledErrorDiv>
    </FormLayout>
  );
}

export default PageNotFound;
