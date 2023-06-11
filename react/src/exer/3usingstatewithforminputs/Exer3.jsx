import React, { useState } from 'react';

function Exer3() {
  const [message, setMessage] = useState('');
  const [messageValidity, setMessageValidity] = useState('Invalid');

  const handleMessageChange = (event) => {
    const value = event.target.value;
    setMessage(value);

    if (value.trim().length < 3) {
      setMessageValidity('Invalid');
    } else {
      setMessageValidity('Valid');
    }
  };

  return (
    <div>
      <h1>Text Messaging App</h1>
      <input type="text" value={message} onChange={handleMessageChange} />
      {messageValidity === 'Invalid' && <p>Invalid message</p>}
      {messageValidity === 'Valid' && <p>Valid message</p>}
    </div>
  );
}

export default Exer3;