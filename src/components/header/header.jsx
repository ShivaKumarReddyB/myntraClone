import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import "./header.style.scss";
import { auth } from "../../firebase/firebase.utli";
const HeaderComponent = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGNOUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGNIN
        </Link>
      )}
    </div>
  </div>
);
export default HeaderComponent;
