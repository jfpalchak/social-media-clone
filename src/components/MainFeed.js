import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import photo2 from "./../img/avatar2.svg";
import photo3 from "./../img/avatar3.svg";
import photo4 from "./../img/avatar4.svg";

const postList = [
  {
    photo: photo2,
    name: "User Two",
    text: "Lorem ipsum yada yada."
  },
  {
    photo: photo2,
    name: "User Two",
    text: "Lorem ipsum yada yada, but a different post."
  },
  {
    photo: photo3,
    name: "User Three",
    text: "Lorem ipsum yada yada. Again!"
  },
  {
    photo: photo4,
    name: "User Four",
    text: "Lorem ipsum yada yada. Again Again!!"
  },
  {
    photo: photo2,
    name: "User Two",
    text: "Lorem ipsum yada yada, I sure talk a lot."
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