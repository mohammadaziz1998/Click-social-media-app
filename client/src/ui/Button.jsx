import styled, { css } from 'styled-components';

const sizes = {
  verySmall: css`
    background-color: transparent;
    border: none;
    box-shadow: none;
    font-size: 2rem;
    width: 3rem;
    height: 3rem;
    padding: 0.2rem 0.2rem;
    text-align: center;
  `,
  fit: css`
    background-color: transparent;
    border: none;
    box-shadow: filter(black);
    font-size: 1.4rem;

    height: 2.5rem;
    padding: 0.2rem 0.2rem;
    text-align: center;
  `,
  small: css`
    font-size: 1.2rem;
    width: 7rem;
    height: 3rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 0.5rem 1rem;
    font-weight: 500;
  `,
};

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border-radius: 10px;
  background-color: var(--color-green-05);
  box-shadow: var(--shadow-sm);
  border: none;
  cursor: pointer;
  ${(props) => sizes[props.size]};
`;

Button.defaultProps = {
  size: 'medium',
};
export default Button;
