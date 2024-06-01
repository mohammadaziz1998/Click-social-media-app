import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../user/useCurrentUser';
import { useEffect } from 'react';
import Spinner from '../../ui/Spinner';
import styled from 'styled-components';

const StyledFullPageLayout = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useCurrentUser();

  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isAuthenticated, isLoading, navigate]
  );
  if (isLoading)
    return (
      <StyledFullPageLayout>
        <Spinner />;
      </StyledFullPageLayout>
    );
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
