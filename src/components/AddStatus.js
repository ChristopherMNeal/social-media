import React from "react";
import ProfilePic from "./../img/profile-pic.jpeg";

function AddStatus() {
  return (
    <div id="AddStatusDiv">
      <img src={ProfilePic} alt="user profile picture" width="150" />
      <form id="add-post">
        <input
          type="text"
          id="postText"
          placeholder="What's on your mind?"
        ></input>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default AddStatus;
