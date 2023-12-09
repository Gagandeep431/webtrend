import React, { useState, useEffect } from 'react';
import '../../css/header.css';
import myImage from '../../images/webBg.jpg';
const Header = () => {

    
  const [text, setText] = useState('');
  const words = [' BUSINESS', ' Business', ' BUSINESS' , ' Business']; // Add your desired words here

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setText(words[currentIndex]);
      currentIndex = (currentIndex + 1) % words.length;
    }, 2000); // Change the interval as needed

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  // Replace 'your-image-url.jpg' with the URL of your background image
  const imageUrl =  myImage;

  const headerStyle = {
    background: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'fixed',
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="typewriter">
        <h1>DIGITAL AGENCY FOR YOUR{text}</h1>
      </div>
      {/* <Home/> */}
    </header>
  );
};

export default Header;
