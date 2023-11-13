import React from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import MainFeed from './MainFeed';

function App() {
  return (
    <div className="App">
      <Header />
      <UserProfile />
      <MainFeed />
      {/* <Suggestions /> */}
    </div>
  );
}

export default App;
