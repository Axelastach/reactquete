import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const { isOnline, setIsOnline } = useContext(UserContext);

  const handleButtonClick = () => {
    setIsOnline(!isOnline);
  };

  return (
    <div>
      <h1>Statut: {isOnline ? 'En ligne' : 'Hors ligne'}</h1>
      <button onClick={handleButtonClick}>
        Changer le statut en {isOnline ? 'hors ligne' : 'en ligne'}
      </button>
    </div>
  );
};

export default UserProfile;
