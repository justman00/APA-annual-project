import { useContext } from 'react';
import { authContext } from '../providers/authProvider';

function useAuth() {
  return useContext(authContext);
}

export default useAuth;
