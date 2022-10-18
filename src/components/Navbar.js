import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  const { isLightTheme, light, dark } = theme;

  const style = isLightTheme ? light : dark;

  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div className="navbar" style={style}>
      <h1>My Hooks App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          {isAuthenticated ? "You are logged in " : ""}
          <button onClick={toggleAuth}>
            {" "}
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
