import styled from 'styled-components';
import { useCurrentUser } from '../features/user/useCurrentUser';
import Modal from './Modal';
import { RiImageEditLine } from 'react-icons/ri';
import UploadUserPhotoForm from '../features/user/UploadUserPhotoForm';

const StyledPersonalDiv = styled.div`
  background-color: var(--color-aqua--700);
  margin-inline: 1rem;
  margin-top: 2rem;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 10px;
  div {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
`;
const PersonalAccountImg = styled.img`
  border-radius: 50%;
`;

function PersonalAccount() {
  const { currentUser } = useCurrentUser();
  return (
    <StyledPersonalDiv>
      <div>
        <Modal>
          <Modal.Open opens="personal-img">
            <span>
              <PersonalAccountImg
                src={`/users/${currentUser?.photo}`}
                alt="personal-user"
                width="200"
                height="200"
              />
              {/* <RiImageEditLine /> */}
            </span>
          </Modal.Open>
          <Modal.Window name="personal-img">
            <UploadUserPhotoForm />
          </Modal.Window>
        </Modal>
      </div>
      <div>
        <h4>Personal info</h4>
        <span>{currentUser?.name}</span>
        <span>26</span>
        <span>Mail</span>
      </div>
    </StyledPersonalDiv>
  );
}

export default PersonalAccount;
