import React from "react";

function Post() {
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
  name: PropTypoes.string,
  name: PropTypes.postText,
};

export default Post;
