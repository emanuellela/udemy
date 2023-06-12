import React from 'react';
import './styles.css';
import ButtonEmanuelle from '../../components/ButtonEmanuelle';

export default function Exer4() {
    const [numero, setNumero] = React.useState(0)
    const incrementCount = () => {
    setNumero(numero +1)
   }
    return (
      <div>
        <p id="counter">{numero}</p>
        <ButtonEmanuelle label="Increment" onClick={() => { incrementCount() }}></ButtonEmanuelle>
      </div>
    );
}
