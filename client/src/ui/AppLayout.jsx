import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import { Outlet } from 'react-router-dom';
import FriendsSidebar from './FriendsSidebar';

const StyledApplayout = styled.div`
  display: grid;
  height: 100vh;

  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr auto;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
  }
`;

function AppLayout() {
  return (
    <StyledApplayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
      <FriendsSidebar />
    </StyledApplayout>
  );
}

export default AppLayout;
