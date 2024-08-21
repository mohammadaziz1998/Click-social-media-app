import AuthenticationForm from '../../ui/AuthenticationForm';
import Button from '../../ui/Button';
import { useForm } from 'react-hook-form';
import { useSignup } from './useSignup';
import SpinnerMini from '../../ui/SpinnerMini';
import styled from 'styled-components';
import ErrorFormMessage from '../../ui/ErrorFormMessage';
const StyledBirthdayForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.4rem;
`;

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { signup, isPending } = useSignup();

  function onSubmite(data) {
    signup(data);
  }
  console.log(errors);
  return (
    <AuthenticationForm onSubmit={handleSubmit(onSubmite)}>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        required
        placeholder="Write your full name with spaces ex: Mohamad aziz"
        {...register('name', { required: 'Please provide your full name' })}
      />
      <ErrorFormMessage>{errors.name?.message}</ErrorFormMessage>

      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        required
        {...register('email', { required: 'Please provide your email' })}
      />
      <ErrorFormMessage>{errors.email?.message}</ErrorFormMessage>

      <StyledBirthdayForm>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input type="date" id="birthday" {...register('birthday')} />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select {...register('gender')}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </div>
      </StyledBirthdayForm>

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

      <label htmlFor="confirm-password">Confirm your password</label>
      <input
        type="password"
        id="passwordConfirm"
        required
        {...register('passwordConfirm', {
          required: 'Please confirm your password',
          validate: (val) => {
            if (watch('password') !== val) return `Dosn't match password`;
          },
        })}
      />
      <ErrorFormMessage>{errors.passwordConfirm?.message}</ErrorFormMessage>

      <Button size="small">
        {isPending ? <SpinnerMini /> : 'Create your account'}
      </Button>
    </AuthenticationForm>
  );
}

export default SignupForm;
