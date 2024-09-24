import React from 'react';
import { useSpring, animated } from 'react-spring';
import bioPic from '../assets/images/Bio.png';
import "../components/Bio.css";

const Bio = () => {
  const props = useSpring({
    to: { transform: 'translateZ(0)', opacity: 1 },
    from: { transform: 'translateZ(-100px)', opacity: 0 },
    config: { tension: 220, friction: 120 },
  });

  return (
    <div className="bio-container">
      <animated.img src={bioPic} alt="Bio" style={props} className="bio-pic" />
    </div>
  );
};

export default Bio;
