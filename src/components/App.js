import React from "react";
import Header from "./Header.js";
import UserSection from "./UserSection.js";
import About from "./About.js";
import Newsfeed from "./Newsfeed.js";
import SuggestedFriends from "./SuggestedFriends.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div id="container">
      <UserSection />
      <About />
      <Newsfeed />
      <SuggestedFriends />
      </div>
    </React.Fragment>
  );
}

export default App;
