import React from "react";
import Post from "./Post";

const mainPostList = [
  {
    name: "Daffy Duck",
    postText:
      "IT’S RABBIT SEASON! IT’S NOT DUCK SEASON! SHOOT THE RABBIT! THE RABBIT! SHHHOOOOTTT THE RAAAAAABBBBBBBBBBIIIIIIIIITTTTTTTTTTIT!!!!!!!!!!!",
  },
  {
    name: "Elmer Fudd",
    postText:
      '"Just wait till I get my hands on that scwewy wabbit and that scwewball duck!"',
  },
  {
    name: "Tweety Bird",
    postText:
      '"OOOOOOOOH but tometing tells me dat puddy is tomewhere awound here cwose to me. With his wong teeth and his sharp cwaws. OOOH, I SCARED!!"',
  },
];

function PostList() {
  return (
    <div id="postList-div">
      <hr />
      {mainPostList.map((post, index) => (
        <Post name={post.name} postText={post.postText} />
      ))}
    </div>
  );
}

export default PostList;
