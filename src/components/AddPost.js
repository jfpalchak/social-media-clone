import React from "react";
import profilePic from "./../img/avatar1.svg";

function AddPost() {
  return(
    <form className="post-form">
      <img src={profilePic} alt="User profile picture"/>
      <input id="user-post-form" type="text" placeholder="What's happening?" />
    </form>
  );
}

export default AddPost;