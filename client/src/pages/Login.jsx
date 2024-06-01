import FormLayout from '../ui/FormLayout';
import AuthenticationLayout from '../ui/AuthenticationLayout';
import Heading from '../ui/Heading';
import { Link } from 'react-router-dom';
import LoginForm from '../features/authentication/loginForm';

function Login() {
  return (
    <FormLayout>
      <AuthenticationLayout>
        <Heading as="h2">Login to your account</Heading>
        <LoginForm />
        <Link to={'/signup'}>if you dont have account create free account</Link>
      </AuthenticationLayout>
    </FormLayout>
  );
}

export default Login;
