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
      <UserSection />
      <About />
      <Newsfeed />
      <SuggestedFriends />
    </React.Fragment>
  );
}

export default App;
