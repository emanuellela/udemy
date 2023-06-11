import React from 'react';
import ButtonEmanuelle from '../../components/ButtonEmanuelle';

function Exer1() {
  const handleBookmarkClick = () => {
    console.log('Stored!');
  };

  return (
    <div>
      <h1>My React App</h1>
      <ButtonEmanuelle label="Bookmark" onClick={handleBookmarkClick}></ButtonEmanuelle>
    </div>
  );
}

export default Exer1;

