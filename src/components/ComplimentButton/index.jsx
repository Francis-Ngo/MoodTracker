import React, { useContext } from 'react';
import { MoodContext } from '../../context/MoodContext';

const ComplimentButton = () => {
  const { compliments, setCompliments, setCurrentMood } = useContext(MoodContext);

  const handleComplimentClick = () => {
    setCompliments((prevCompliments) => prevCompliments + 1);

    if (compliments < 5) {
      setCurrentMood('sad');
    } else if (compliments >= 5 && compliments <= 9) {
      setCurrentMood('fine');
    } else if (compliments >= 10 && compliments <= 15) {
      setCurrentMood('happy');
    }
  };

  return (
    <button onClick={handleComplimentClick}>
      Compliment
    </button>
  );
};

export default ComplimentButton;
