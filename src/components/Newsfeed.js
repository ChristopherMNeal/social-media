import React from "react";
import PostList from "PostList.js";
import AddStatus from "AddStatus.js";

function Newsfeed() {
  return (
    <div id="newsFeed-div">
      <AddStatus />
      <PostList />
    </div>
  );
}

export default Newsfeed;
