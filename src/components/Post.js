import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <div id="post-div">
      <h4>{props.name}</h4>
      <p>
        <em>{props.postText}</em>
      </p>
      <hr />
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  postText: PropTypes.string
};

export default Post;

