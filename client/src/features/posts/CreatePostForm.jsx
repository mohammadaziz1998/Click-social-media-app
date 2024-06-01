import BaseFormLayout from '../../ui/BaseFormLayout';
import FormField from '../../ui/FormField';
import Button from '../../ui/Button';
import { useEffect, useState } from 'react';
import { useCreatePost } from './useCreatePost';
import SpinnerMini from '../../ui/SpinnerMini';

function CreatePostForm({ setIsPost }) {
  const [postsText, setPostsText] = useState('');
  const [postsPhoto, setPostsPhoto] = useState();
  const { createPost, status } = useCreatePost();
  console.log(status);
  function handleCreatePost(e) {
    e.preventDefault();
    const data = {
      text: postsText,
      photo: postsPhoto,
    };
    createPost(data);
  }
  useEffect(
    function () {
      status === 'success' && setIsPost(false);
    },
    [status, setIsPost]
  );
  return (
    <BaseFormLayout>
      <form>
        <FormField type="post">
          <label>Whats on your mind</label>
          <input
            type="text"
            value={postsText}
            onChange={(e) => setPostsText(e.target.value)}
          />
        </FormField>
        <FormField>
          <label>Choose a photo</label>
          <input
            type="file"
            onChange={(e) => setPostsPhoto(e.target.files[0])}
          />
        </FormField>

        <Button size="medium" onClick={handleCreatePost}>
          {status === 'pending' ? <SpinnerMini /> : 'Share post'}
        </Button>
      </form>
    </BaseFormLayout>
  );
}

export default CreatePostForm;
