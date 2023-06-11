import React, { useState } from 'react';
import ButtonEmanuelle from '../../components/ButtonEmanuelle';

function App() {
  const [price, setPrice] = useState(100);

  const handleButtonClick = () => {
    setPrice(75);
  };

  return (
    <div>
      <h1>Online Shop</h1>
      <p>Price: ${price}</p>
      <ButtonEmanuelle label="Click to Apply Discount" onClick={handleButtonClick}></ButtonEmanuelle>
    </div>
  );
}

export default App;