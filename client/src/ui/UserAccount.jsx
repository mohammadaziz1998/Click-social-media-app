import styled from 'styled-components';
import Modal from './Modal';
import { RiImageEditLine } from 'react-icons/ri';
import UploadUserPhotoForm from '../features/user/UploadUserPhotoForm';

import AddFriendButton from '../features/friendship/AddFriendButton';
import { useIsMyFriend } from '../features/friendship/useIsMyFriend';
const Base_Url = import.meta.env.VITE_API_URL;

const StyledPersonalDiv = styled.div`
  background-color: var(--color-green-100);
  margin: 2rem auto;
  width: min(750px, 100%);
  /* height: auto; */
  display: grid;
  padding: 1rem;
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
  // const { friendId } = useParams();
  const { isMyFriend } = useIsMyFriend('');
  return (
    <StyledPersonalDiv>
      <div>
        <Modal>
          <Modal.Open opens={`personal-${user?.name}`}>
            <span>
              <PersonalAccountImg
                src={`${Base_Url}/images/profile/${user?.photo}`}
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
        {!personal && isMyFriend !== 'your friend' && <AddFriendButton />}
      </div>
    </StyledPersonalDiv>
  );
}

export default UserAccount;
