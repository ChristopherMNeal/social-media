import React from "react";
import SuggestedFriend from "./SuggestedFriend.js";
import profilePic from "./../img/profile-pic.jpeg";

const people = [
  {
    profilePic: profilePic,
    name: "Daffy Duck"
  },
  {
    profilePic: profilePic,
    name: "Road Runner"
  },
  {
    profilePic: profilePic,
    name: "Tazmanian Devil"
  }
];

function SuggestedFriends() {
  return (
    <div id="suggestedFriends-div">
      <h2>Lorem Ipsum</h2>
      {people.map((person, index) => (
        <SuggestedFriend 
        profilePic={person.profilePic}
        name={person.name}
        key={index} />
      ))}
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

export default SuggestedFriends;