import { Link } from 'react-router-dom';
import AuthenticationLayout from '../ui/AuthenticationLayout';
import FormLayout from '../ui/FormLayout';
import Heading from '../ui/Heading';
import Logo from '../ui/Logo';

function Signup() {
  return (
    <FormLayout>
      <AuthenticationLayout>
        <Logo />
        <Heading as="h2">Create new account</Heading>
        <Link to={'/login'}>if you are already have an account login</Link>
      </AuthenticationLayout>
      ;
    </FormLayout>
  );
}

export default Signup;
