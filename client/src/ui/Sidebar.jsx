import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaUserFriends } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';
import Modal from '../ui/Modal';

import SidebarLink from './SidebarLink';
import ConfirmLogout from '../features/authentication/ConfirmLogout';

export const StyledSidebarLink = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  row-gap: 1rem;

  a {
    color: var(--color-green-05);
    text-decoration: none;
    border-radius: 10px;
    padding: 5px;
  }

  a:hover {
    background-color: #aab3ad;
  }

  @media (max-width: 600px) {
    height: 0.7rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    a {
      padding-inline: auto;
      padding-top: 5px;
    }
  }
`;
const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;
    margin: 1rem 0;
    color: var(--color-green-05);
    font-size: 1.5rem;
    margin-inline: 1rem;
    border-radius: 10px;
  }

  span {
    display: none;
  }
  @media (max-width: 600px) {
    margin-bottom: 1rem;
    height: 0.7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1000px) {
    span {
      display: block;
    }
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <StyledSidebarLink>
        <SidebarLink name="home">
          <FaHome />
        </SidebarLink>

        <SidebarLink name="account">
          <MdAccountCircle />
        </SidebarLink>

        <SidebarLink name="settings">
          <IoSettingsOutline />
        </SidebarLink>

        <SidebarLink name="friends">
          <FaUserFriends />
        </SidebarLink>

        {/* <SidebarLink name="notifications"></SidebarLink> */}

        <SidebarLink name="messages">
          <FiMessageSquare />
        </SidebarLink>
      </StyledSidebarLink>
      <Modal>
        <Modal.Open>
          <button>
            <MdLogout />
            <span>Logout</span>
          </button>
        </Modal.Open>
        <Modal.Window>
          <ConfirmLogout />
        </Modal.Window>
      </Modal>
    </StyledSidebar>
  );
}

export default Sidebar;
