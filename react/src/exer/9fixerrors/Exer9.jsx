import React from 'react';
import './styles.css';
import ButtonEmanuelle from '../../components/ButtonEmanuelle';

export default function Exer9() {
  const clickHandler = () => {
    console.log('Clicked!');
  };

  return (
    <div>
      <h2>You're logged in!</h2>
      <p>Welcome to your user profile!</p>
      <ButtonEmanuelle label="Click me!" onClick={clickHandler}></ButtonEmanuelle>
    </div>
  );
}