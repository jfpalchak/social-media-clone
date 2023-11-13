import React from "react";
import UserHeader from "./UserHeader";
import UserLinks from "./UserLinks";

function UserInfo() {
  return (
    <div className="user-info">
      <div className="user-card">
      <UserHeader />
      <UserLinks />
      </div>
    </div>
  );
}

export default UserInfo;