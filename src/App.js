import React, { useState } from 'react';
import UserContext from './UserContext';
import UserProfile from './components'

const App = () => {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <UserContext.Provider value={{ isOnline, setIsOnline }}>
      <UserProfile />
    </UserContext.Provider>
  );
};

export default App;
