import React, { useEffect, useState } from 'react';
import CircleType from 'circletype';
// import './CircularText.css'; // Import a CSS file for styling

function Circle() {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const element = document.getElementById('rotated');
    const circleType = new CircleType(element);
    circleType.radius(80);

    // Function to update rotation based on scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotationSpeed = 2; // Adjust this value to control rotation speed
      const rotation = scrollY * rotationSpeed;
      setRotationAngle(rotation);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const circleStyle = {
    transform: `rotate(${rotationAngle}deg)`, // Apply rotation style
  };

  return (
    <div>
        <div className="c-text">
        <div id="rotated" style={circleStyle}>
      THE . EPIC . BRAND . THE . EPIC . BRAND .
      </div>
        </div>
 
    </div>
  );
}

export default Circle;