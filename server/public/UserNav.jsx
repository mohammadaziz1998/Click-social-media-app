import styled, { css } from 'styled-components';
const Base_Url = import.meta.env.VITE_API_URL;

const sizes = {
  small: css`
    width: 30px;
    height: 30px;
  `,
  medium: css`
    width: 40px;
    height: 40px;
  `,
  large: css`
    width: 65px;
    height: 65px;
  `,
};
const nameSizes = {
  small: css`
    font-size: 1rem;
  `,
  medium: css`
    font-size: 1.3rem;
  `,
  large: css`
    font-size: 1.5rem;
  `,
};

const StyledUserNav = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    margin-top: 1.2rem;

    border-radius: 50%;
    background-color: #31cc31;
    width: 10px;
    height: 10px;
    position: absolute;
    z-index: 3;
  }
`;
const Img = styled.img`
  z-index: auto;
  border-radius: 50%;
  ${(props) => sizes[props.sizes]}
`;

const StyledUserName = styled.span`
  ${(props) => nameSizes[props.sizes]}
`;

function UserNav({ sizes, imgUrl, name, active }) {
  return (
    <StyledUserNav>
      {active && <div></div>}
      <Img
        src={`${Base_Url}/images/profile/${imgUrl}`}
        alt={name}
        sizes={sizes}
      />
      <StyledUserName sizes={sizes}>{name}</StyledUserName>
    </StyledUserNav>
  );
}
export default UserNav;
