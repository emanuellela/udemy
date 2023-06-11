import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function Exer4() {
    const [numero, setNumero] = React.useState(0)
    const incrementCount = () => {
    setNumero(numero +1)
   }
    return (
      <div>
        <p id="counter">{numero}</p>
        <button onClick={() => { incrementCount() }}>Increment
        </button>
      </div>
    );
}
