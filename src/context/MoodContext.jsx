import React, { createContext, useState } from 'react';

const MoodContext = createContext();

const MoodProvider = ({ children }) => {
  const [currentMood, setCurrentMood] = useState('neutral');
  const [compliments, setCompliments] = useState(0);

  return (
    <MoodContext.Provider value={{ currentMood, setCurrentMood, compliments, setCompliments }}>
      {children}
    </MoodContext.Provider>
  );
};

export { MoodProvider, MoodContext };
