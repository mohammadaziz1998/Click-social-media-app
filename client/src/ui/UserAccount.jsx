import styled from 'styled-components';
import Modal from './Modal';
import { RiImageEditLine } from 'react-icons/ri';
import UploadUserPhotoForm from '../features/user/UploadUserPhotoForm';

import AddFriendButton from '../features/notification/AddFriendButton';

const StyledPersonalDiv = styled.div`
  /* background-color: var(--color-green-05); */
  margin: 2rem auto;
  max-width: 50rem;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  div {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
`;
const PersonalAccountImg = styled.img`
  border-radius: 50%;
  max-width: 550px;
  max-height: 550px;
`;

function UserAccount({ user, personal = true }) {
  return (
    <StyledPersonalDiv>
      <div>
        <Modal>
          <Modal.Open opens={`personal-${user?.name}`}>
            <span>
              <PersonalAccountImg
                src={`/images/profile/${user?.photo}`}
                alt="personal-user"
                width="200"
                height="200"
              />
              {personal && <RiImageEditLine />}
            </span>
          </Modal.Open>
          <Modal.Window name={`personal-${user?.name}`}>
            <UploadUserPhotoForm img={user?.photo} personal={personal} />
          </Modal.Window>
        </Modal>
      </div>
      <div>
        <h4>Personal info</h4>
        <span>{user?.name}</span>
        <span>{user?.age}</span>
        {!personal && <AddFriendButton />}
      </div>
    </StyledPersonalDiv>
  );
}

export default UserAccount;
