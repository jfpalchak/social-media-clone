import React from "react";
import PropTypes from "prop-types";

function Suggestion(props) {
  return (
    <div className="suggestion-item">
      <img src={props.photo} alt={props.name + " profile photo."}/>
      <div className="suggestion-content">
        <h5>{props.name}</h5>
        <button>Button</button>
      </div>
    </div>
  );
}

Suggestion.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string
};

export default Suggestion;