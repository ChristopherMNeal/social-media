import React from "react";
import ProfilePic from "./../img/profile-pic.jpeg";

function UserSection() {
  const tweetCount = 30;
  const followingCount = 12;
  const fololowersCount = 99;
  return (
    <div id="userSection-div">
      <img src={ProfilePic} alt="the user" width="150" />
      <h3>Bugs Bunny</h3>
      <ul>
        <li>Tweets: {tweetCount}</li>
        <li>Following: {followingCount}</li>
        <li>Fololowers: {fololowersCount}</li>
      </ul>
    </div>
  );
}

export default UserSection;
