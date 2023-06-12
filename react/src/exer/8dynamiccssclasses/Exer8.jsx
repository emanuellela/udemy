import React from 'react';
import ButtonEmanuelle from '../../components/ButtonEmanuelle';

export default function Exer8() {
    //cria um estado com valor inicial
    const [isStyled, setIsStyled] = React.useState(false)
    return (
        <div>
            <p className={isStyled ? 'active' : ''}>Style me!</p>
            <ButtonEmanuelle label="Toggle Style" onClick={()=> setIsStyled(!isStyled)}></ButtonEmanuelle>
        </div>
    );
}