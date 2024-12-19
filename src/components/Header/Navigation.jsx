import { useContext } from "react";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import AuthContext from "../../context/AuthContext";

function Navigation() {

  const { isLoggedIn, onLogout } = useContext(AuthContext)

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to='/'>Public</Link>
        </li>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/gallery'>Galería</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <Button color='secondary' onClick={onLogout}>
              LOGOUT
            </Button>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;