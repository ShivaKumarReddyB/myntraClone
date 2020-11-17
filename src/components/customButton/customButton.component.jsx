import React from "react";

import "./customButton.style.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={` ${inverted ? "inverted" : ""}${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
// todo: need to fix button content the  text is coming out of the button
