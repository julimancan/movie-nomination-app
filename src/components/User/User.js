import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Nominations from "./Nominations";

const imageStyle = {
  maxHeight: "5em"
}
const User = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
        <img style={imageStyle} src={user.picture} alt={user.name} />
        <Nominations />
      </div>
    )
  );
};

export default User;
