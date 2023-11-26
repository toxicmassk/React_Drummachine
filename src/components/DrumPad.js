// DrumPad.js
import React from 'react';

const DrumPad = ({ sound, onPlay }) => {
  const handlePlay = () => {
    // Use Tone.js to play the sound
    onPlay(sound);
  };

  return (
    <div className="drum-pad" onClick={handlePlay}>
      {sound}
    </div>
  );
};

export default DrumPad;
