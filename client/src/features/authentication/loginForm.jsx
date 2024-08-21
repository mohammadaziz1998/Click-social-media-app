import Button from '../../ui/Button';

import AuthenticationForm from '../../ui/AuthenticationForm';
import { useForm } from 'react-hook-form';
import ErrorFormMessage from '../../ui/ErrorFormMessage';
import { useLogin } from './useLogin';
import SpinnerMini from '../../ui/SpinnerMini';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, isPending } = useLogin();
  function onSubmite(data) {
    login(data);
  }
  return (
    <AuthenticationForm onSubmit={handleSubmit(onSubmite)}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        required
        {...register('email', { required: 'Please prvide your email' })}
      />
      <ErrorFormMessage>{errors.email?.message}</ErrorFormMessage>

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        required
        {...register('password', {
          required: 'Please provide your password',
          minLength: {
            value: 8,
            message: 'password must be at least 8 charecters',
          },
        })}
      />
      <ErrorFormMessage>{errors.password?.message}</ErrorFormMessage>

      <Button size="small">{isPending ? <SpinnerMini /> : 'Login'}</Button>
    </AuthenticationForm>
  );
}

export default LoginForm;
