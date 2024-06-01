import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';
import { useLogout } from './useLogout';

function ConfirmLogout() {
  const { logout, isPending } = useLogout();
  return (
    <div>
      <p>Are you sure you want to logout</p>

      {isPending ? (
        <Spinner />
      ) : (
        <Button size="small" onClick={() => logout()}>
          Logout
        </Button>
      )}
    </div>
  );
}

export default ConfirmLogout;
