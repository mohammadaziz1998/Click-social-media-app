import UserPosts from '../features/user/UserPosts';
import PersonalAccount from '../ui/PersonalAccount';

function Account() {
  return (
    <div>
      <PersonalAccount />
      <UserPosts />
    </div>
  );
}

export default Account;
