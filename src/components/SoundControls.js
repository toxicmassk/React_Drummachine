// SoundControls.js
import React from 'react';
import Knob from 'react-knob';

const SoundControls = ({ onChange }) => {
  return (
    <div>
      <div>
        <span>Level</span>
        <Knob onChange={(value) => onChange('level', value)} />
      </div>
      <div>
        <span>Pitch</span>
        <Knob onChange={(value) => onChange('pitch', value)} />
      </div>
      <div>
        <span>Decay</span>
        <Knob onChange={(value) => onChange('decay', value)} />
      </div>
      <div>
        <span>Filter</span>
        <Knob onChange={(value) => onChange('filter', value)} />
      </div>
      {/* Repeat for other parameters (pitch, decay, lowpass filter) */}
      <div>
        <span>Master Volume</span>
        <Knob onChange={(value) => onChange('masterVolume', value)} />
      </div>
    </div>
  );
};

export default SoundControls;
