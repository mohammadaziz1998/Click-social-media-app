import { useState } from 'react';
import { useCurrentUser } from './useCurrentUser';
import { useUpdateUserPhoto } from './useUpdateUserPhoto';
import Button from '../../ui/Button';

function UploadUserPhotoForm({ img, personal }) {
  // const { currentUser } = useCurrentUser();
  const { updateUserPhoto } = useUpdateUserPhoto();
  const [userPhoto, setUserPhoto] = useState('');
  console.log(userPhoto);
  function handleSubmit(e) {
    e.preventDefault();

    updateUserPhoto(userPhoto);
  }

  return (
    <form encType="multipart/form-data">
      <img
        src={`/images/profile/${img}`}
        alt="personal-user"
        width="400"
        height="400"
      />
      {personal && (
        <input type="file" onChange={(e) => setUserPhoto(e.target.files[0])} />
      )}
      {personal && (
        <Button size="small" onClick={handleSubmit}>
          submit
        </Button>
      )}
    </form>
  );
}

export default UploadUserPhotoForm;
