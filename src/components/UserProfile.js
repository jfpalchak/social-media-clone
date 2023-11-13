import React from "react";
import UserInfo from "./UserInfo";
import UserBio from "./UserBio";

function UserProfile() {
  return (
    <section className="user-profile">
      <UserInfo />
      <UserBio />
    </section>
  );
}

export default UserProfile;