import { useState } from 'react';
import { useCurrentUser } from './useCurrentUser';
import { useUpdateUserPhoto } from './useUpdateUserPhoto';

function UploadUserPhotoForm() {
  const { currentUser } = useCurrentUser();
  const { updateUserPhoto } = useUpdateUserPhoto();
  const [userPhoto, setUserPhoto] = useState('');
  console.log(userPhoto);
  function handleSubmit(e) {
    e.preventDefault();

    updateUserPhoto(userPhoto);
  }

  return (
    <form encType="multipart/form-data">
      <img src={`/users/${currentUser?.photo}`} alt="personal-user" />
      <input type="file" onChange={(e) => setUserPhoto(e.target.files[0])} />
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}

export default UploadUserPhotoForm;
