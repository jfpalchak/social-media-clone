import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <div className="post-item">
        <img src={props.photo} alt={props.name + " profile picture."}/>
        <div className="post-content">
          <h4>{props.name}</h4>
          <p>{props.text}</p>
        </div>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
};

export default Post;