import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <div className="post-item">
      <img src={props.photo} alt={props.name + " profile picture."}/>
      <h4>{props.name}</h4>
      <p>{props.text}</p>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
};

export default Post;