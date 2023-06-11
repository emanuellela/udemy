import React from 'react';

export default function Exer8() {
    //cria um estado com valor inicial
    const [isStyled, setIsStyled] = React.useState(false)
    return (
        <div>
            <p className={isStyled ? 'active' : ''}>Style me!</p>
            <button onClick={()=> setIsStyled(!isStyled)}>Toggle style</button>
        </div>
    );
}