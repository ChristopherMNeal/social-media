import React from "react";
import PropTypes from "prop-types";

function SuggestedFriend(props) {
  return (
  <React.Fragment>
    <img src={props.profilePic || "./../profile-pic.jpeg"} alt="profile picture" width="150" />
    <p>{props.name}</p>
    <button>Button</button>
  </React.Fragment>
  );
}

SuggestedFriend.propTypes = {
  profilePic: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default SuggestedFriend;