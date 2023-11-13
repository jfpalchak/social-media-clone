import React from "react";
import profilePic from "./../img/avatar1.svg";

function UserHeader() {
  return (
    <h4>
      <img src={profilePic} alt="User profile picture"/>
      <span className="user-name">User Name</span>
    </h4>
  );
}

export default UserHeader;