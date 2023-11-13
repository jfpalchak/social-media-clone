import React from "react";
import UserProfile from './UserProfile';
import MainFeed from './MainFeed';
import AsideSuggestions from './AsideSuggestions';

function Content() {
  return (
    <main>
      <UserProfile />
      <MainFeed />
      <AsideSuggestions />
    </main>
  );
}

export default Content;