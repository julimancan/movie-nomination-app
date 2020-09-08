import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";

const buttonStyle = {
  borderColor: "#BBBD71",
  color: "#BBBD71",
};

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button ghost onClick={() => loginWithRedirect()} style={buttonStyle}>
        Log In
      </Button>
    )
  );
};

export default LoginButton;
