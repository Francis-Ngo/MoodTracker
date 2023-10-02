import React, { useContext } from 'react';
import { MoodContext } from '../../context/MoodContext';

const Emojis = () => {
  const { currentMood } = useContext(MoodContext);

  const getEmoji = () => {
    switch (currentMood) {
      case 'happy':
        return '😃';
      case 'neutral':
        return '😐';
      case 'sad':
        return '😞';
      default:
        return '😐';
    }
  };

  return <div>{getEmoji()}</div>;
};

export default Emojis;
