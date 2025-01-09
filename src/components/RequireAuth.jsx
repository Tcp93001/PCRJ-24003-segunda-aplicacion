import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log('require', isLoggedIn)
  const storageIsLoggedIn = localStorage.getItem('isLoggedIn')
  const location = useLocation()

  if (!isLoggedIn && !storageIsLoggedIn) {
    return <Navigate to='/login' state={{from: location}} replace />
  }

  return children;

}

export default RequireAuth;