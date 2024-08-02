import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import BaseFormLayout from '../../ui/BaseFormLayout';
import FormField from '../../ui/FormField';
import { useUpdateUserInfo } from './useUpdateUserInfo';
import { useState } from 'react';
import { useCurrentUser } from './useCurrentUser';
import SpinnerMini from '../../ui/SpinnerMini';
import { useUpdatepassword } from './useUpdatePassword';
import { useForm } from 'react-hook-form';
import ErrorFormMessage from '../../ui/ErrorFormMessage';

function UpdateSettingsForm() {
  const { currentUser } = useCurrentUser();
  const [name, setName] = useState(currentUser?.name || '');
  const [age, setAge] = useState(currentUser?.age || 0);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { updateInfo, isPending: isPendingInfo } = useUpdateUserInfo();
  const { updatePassword, isPending: isPendingPass } = useUpdatepassword();

  const newPassword = watch('newPassword');
  const confirmNewPassword = watch('confirmNewPassword');

  function handleUpdateInfo(e) {
    e.preventDefault();
    updateInfo({ name, age });
  }

  function handleUpdatepassword(data) {
    updatePassword(data);
    reset();
  }

  return (
    <>
      <BaseFormLayout>
        <Heading as="h3">Update Your Personal Informations</Heading>

        <form onSubmit={handleUpdateInfo}>
          <FormField>
            <label>change your name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isPendingInfo}
            />
          </FormField>

          <FormField>
            <label>change your age</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              disabled={isPendingInfo}
            />
          </FormField>

          <Button size="small" disabled={isPendingInfo}>
            {isPendingInfo ? <SpinnerMini /> : 'update'}
          </Button>
        </form>
      </BaseFormLayout>

      <BaseFormLayout>
        <Heading as="h3">Update Your Password</Heading>

        <form onSubmit={handleSubmit(handleUpdatepassword)}>
          <FormField>
            <label>Current Password</label>
            <input
              type="password"
              id="currentPassword"
              {...register('currentPassword', {
                required: 'Please provide your current password',
                minLength: {
                  value: 8,
                  message: 'password must be at least 8 charecters',
                },
              })}
              disabled={isPendingPass}
            />
          </FormField>
          <ErrorFormMessage>{errors.currentPassword?.message}</ErrorFormMessage>

          <FormField>
            <label>New Password</label>
            <input
              type="password"
              id="newPassword"
              {...register('newPassword', {
                required: 'Please provide your new password',
                minLength: {
                  value: 8,
                  message: 'password must be at least 8 charecters',
                },
              })}
              disabled={isPendingPass}
            />
          </FormField>
          <ErrorFormMessage>{errors.newPassword?.message}</ErrorFormMessage>

          <FormField>
            <label>Re-Enter New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              {...register('confirmNewPassword', {
                required: 'Please confirm your password',
                minLength: {
                  value: 8,
                  message: 'password must be at least 8 charecters',
                },
                validate: () =>
                  newPassword === confirmNewPassword ||
                  'Passwords are not the same',
              })}
              disabled={isPendingPass}
            />
          </FormField>
          <ErrorFormMessage>
            {errors.confirmNewPassword?.message}
          </ErrorFormMessage>

          <Button size="small" disabled={isPendingPass}>
            {isPendingPass ? <SpinnerMini /> : 'update'}
          </Button>
        </form>
      </BaseFormLayout>
    </>
  );
}

export default UpdateSettingsForm;
