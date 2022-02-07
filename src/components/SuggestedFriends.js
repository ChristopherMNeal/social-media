import React from "react";
import sugestedFriend from "./suggestedFriend.js"

const people = [
  {
    profilePic: "./../img/profile-pic.png",
    name: "Daffy Duck"
  },
  {
    profilePic: "./../img/profile-pic.png",
    name: "Road Runner"
  },
  {
    profilePic: "./../img/profile-pic.png",
    name: "Tazmanian Devil"
  }
];

function SuggestedFriends() {
  return (
    <div id="suggestedFriends-div">
      <h2>Lorem Ipsum</h2>
      <SuggestedFriend />
    </div>
  )
}

// return (
//   <React.Fragment>
//     <hr/>
//     {mainTicketList.map((ticket, index) =>
//       <Ticket names={ticket.names}
//         location={ticket.location}
//         issue={ticket.issue}
//         key={index}/>
//     )}
//   </React.Fragment>
// );