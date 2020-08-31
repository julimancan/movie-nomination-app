import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";

const buttonStyle = {
  borderColor: "green",
};

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return isAuthenticated && <Button ghost style={buttonStyle} onClick={() => logout()}>Log Out</Button>;
};

export default LogoutButton;
