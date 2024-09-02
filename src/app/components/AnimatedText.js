import React from 'react';
import'./AnimatedText.module.css';

const AnimatedText = () => {
  return (
    <svg viewBox="0 0 960 300">
    <symbol id="s-text">
      <text text-anchor="middle" x="50%" y="80%">Q-B4ND3R4S</text>
    </symbol>

    <g class = "g-ants">
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
    </g>
  </svg>
  );
};

export default AnimatedText;