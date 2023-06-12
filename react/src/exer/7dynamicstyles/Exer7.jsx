import React, { useState } from 'react';
import './styles.css';
import ButtonEmanuelle from '../../components/ButtonEmanuelle';

function Exer7() {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
  };

  const paragraphStyle = {
    color: isRed ? 'red' : 'white'
  };

  return (
    <div>
      <h1 className="title">Styling Example</h1>
      <ButtonEmanuelle label="Toggle Style" onClick={handleClick}></ButtonEmanuelle>
      <p style={paragraphStyle}>Style me</p>
    </div>
  );
}

export default Exer7;