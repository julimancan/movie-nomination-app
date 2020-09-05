import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Nominations from "./Nominations";

const imageStyle = {
  maxHeight: "5em"
}
const User = (props) => {
  const { user, isAuthenticated } = useAuth0();
  console.log("props in user", props)
  return (
    isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
        <img style={imageStyle} src={user.picture} alt={user.name} />
        <Nominations props={props}/>
      </div>
    )
  );
};

export default User;
