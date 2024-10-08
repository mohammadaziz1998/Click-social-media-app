import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';
import { useOutsideClick } from '../hooks/useOutsideClick';

const StyledBaseModal = styled.div`
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  width: 100%;
  max-height: 90vh;
  scrollbar-gutter: stable both-edges;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
`;

const StyledModal = styled.div`
  background-color: var(--color-green-100);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3rem 3.8rem;

  transition: all 0.5s;
  width: 70%;
  border-radius: 4px;

  @media (max-width: 600px) {
    width: 95%;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-border-gray);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
  margin-inline: 0;
  padding-inline: 0;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-aqua-100);
  }

  & svg {
    /* width: 2.4rem;
    height: 2.4rem; */
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

///////////////
//
const ModalContext = createContext();
//
///////
function Modal({ children }) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');

  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}
////////////////
function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

//////////

////////
////////
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClick(close);

  if (name !== openName) return null;
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <StyledBaseModal>
          <Button onClick={close}>
            <GrClose />
          </Button>
          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </StyledBaseModal>
      </StyledModal>
    </Overlay>,
    document.body
  );
}
/////////////
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
