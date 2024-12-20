import React from 'react';

type WelcomeProps = {
  isLoggedIn: boolean;
};

const Welcome: React.FC<WelcomeProps> = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h1>おかえり</h1>;
  } else {
    return <h1>Please sign up.</h1>;
  }
};

export default Welcome;
