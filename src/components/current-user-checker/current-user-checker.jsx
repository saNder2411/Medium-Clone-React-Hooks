import useLocalStorage from '../../hooks/use-local-storage/use-local-storage';
import useService from '../../hooks/use-service/use-service';
import useCheckCurrentUser from '../../hooks/use-check-current-user/use-check-current-user';

const CurrentUserChecker = ({children}) => {
  const [token] = useLocalStorage(`token`);
  const [{data}, doRequest] = useService(`getCurrentUser`);

  useCheckCurrentUser(token, data, doRequest);

  return children;
};

export default CurrentUserChecker;
