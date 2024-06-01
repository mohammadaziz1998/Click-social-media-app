import { Link } from 'react-router-dom';
import AuthenticationLayout from '../ui/AuthenticationLayout';
import FormLayout from '../ui/FormLayout';
import Heading from '../ui/Heading';

function Signup() {
  return (
    <FormLayout>
      <AuthenticationLayout>
        <Heading as="h2">Create new account</Heading>
        <Link to={'/login'}>if you are already have an account login</Link>
      </AuthenticationLayout>
      ;
    </FormLayout>
  );
}

export default Signup;
