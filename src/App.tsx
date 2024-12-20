import React, { useState } from 'react';
import './App.css';
import Greeting from "./components/Greeting"
import Welcome from './components/Welcome';
import Dog from './components/Dog';
import Person from './components/Composition';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className="App">
      <Greeting name="Taro" />
      <Welcome isLoggedIn={isLoggedIn} />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
      <Dog/>
      <Person name="John" />
    </div>
  );
}

export default App;
