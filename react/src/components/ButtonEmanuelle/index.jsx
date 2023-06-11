import React from 'react';

function ButtonEmanuelle({ label, onClick }) {
  const buttonStyle = {
    backgroundColor: 'green',
    color: 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonEmanuelle;