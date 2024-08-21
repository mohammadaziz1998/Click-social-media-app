import { NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import styled from 'styled-components';

const StyledAsideLinkDiv = styled.div`
  max-height: 1.5rem;
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;

  p {
    display: none;
  }

  @media (min-width: 1000px) {
    padding-left: 1rem;
    p {
      display: block;
    }
  }
`;

function SidebarLink({ children, name }) {
  const nameUpperCase = `${name[0].toUpperCase()}${name.slice(1)}`;
  return (
    <NavLink
      className={({ isActive }) => (isActive ? 'active' : '')}
      to={`/${name}`}
      data-tooltip-id={name}
      data-tooltip-content={nameUpperCase}
      data-tooltip-place="top-start"
    >
      <StyledAsideLinkDiv>
        {children}
        <Tooltip id={name} className="tooltip" />
        <p>{nameUpperCase}</p>
      </StyledAsideLinkDiv>
    </NavLink>
  );
}

export default SidebarLink;
