import styled, { css } from 'styled-components';

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
    font-size: 4rem;
  `,
};

const StyledUserNav = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  div {
    margin-top: 1.2rem;

    border-radius: 50%;
    background-color: #00e400;
    width: 10px;
    height: 10px;
    position: absolute;
  }
  img {
    border-radius: 50%;
  }
`;
const Img = styled.img`
  ${(props) => sizes[props.sizes]}
`;

const StyledUserName = styled.span`
  ${(props) => nameSizes[props.sizes]}
`;

function UserNav({ sizes, imgUrl, name, active }) {
  return (
    <StyledUserNav>
      {active && <div></div>}
      <Img src={imgUrl} alt={name} sizes={sizes} />
      <StyledUserName sizes={sizes}>{name}</StyledUserName>
    </StyledUserNav>
  );
}
export default UserNav;
