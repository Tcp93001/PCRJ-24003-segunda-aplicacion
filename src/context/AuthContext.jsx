/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogin: () => {}
})

export const BASE_URL = 'https://react-http-prc-24003-default-rtdb.firebaseio.com/'

export function AuthContextProvider(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isLoggedIn");
    if (isAuthenticated === "true") {
      console.log('loggin', isAuthenticated)
      setIsLoggedIn(true);
    }
  }, []);

  const fetchUser = async (email) => {
    const url = `${BASE_URL}users.json?orderBy="email"&equalTo="${email}"`;
    const response = await fetch(url);

    if(!response.ok) throw new Error('Algo salio mal...')

    return response.json();
  };

  const loginHandler = async (email, callback) => {
    try {
      const user = await fetchUser(email)
      // que pasa si el usuario llega vacio (no existe)
      console.log('usuario', user)
      const userId = Object.keys(user)[0]
      console.log('userId', userId)

      if (!userId) throw new Error('Correo Inválido')

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userId", userId);
      setIsLoggedIn(true);

      return callback(userId)
    } catch (error) {
      console.log('error!!', error.message)
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;