// App.jsx
import React from 'react';
import { MoodProvider } from './context/MoodContext';
import Emojis from './components/Emojis';
import ComplimentButton from './components/ComplimentButton';

const App = () => {
  return (
    <MoodProvider>
      <div>
        <Emojis />
        <ComplimentButton />
      </div>
    </MoodProvider>
  );
};

export default App;
