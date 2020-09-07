import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Nominations from "./Nominations";

const imageStyle = {
  height: "7em",
  margin: ".3em"
};
const userStyle = {
  width: "10em",
  border: "solid rgba(89,91,24,1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: ".3em",
  padding: "0.2em",
  margin: "2em 5em 2em"
};
const userNameStyle = {
  color: "rgba(89,91,24,1)",
};

const User = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div style={userStyle}>
        <h2 style={userNameStyle}>{user.name}</h2>
        <img style={imageStyle} src={user.picture} alt={user.name} />
        <Nominations />
      </div>
    )
  );
};

export default User;
