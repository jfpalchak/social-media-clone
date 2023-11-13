import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";

const postList = [
  {
    photo: "image",
    name: "User One",
    text: "Lorem ipsum yada yada."
  },
  {
    photo: "image",
    name: "User Two",
    text: "Lorem ipsum yada yada. Again!"
  },
  {
    photo: "image",
    name: "User One",
    text: "Lorem ipsum yada yada. Again Again!!"
  }
];

function MainFeed() {
  return (
    <section className="main-feed">
      <AddPost />

      <div className="post-list">
      {postList.map((post, index) =>
        <Post
          photo={post.photo}
          name={post.name}
          text={post.text}
          key={index}
        />
      )}
      </div>
      
    </section>
  );
}

export default MainFeed;