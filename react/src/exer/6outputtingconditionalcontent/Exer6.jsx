import React from 'react';
import ButtonEmanuelle from '../../components/ButtonEmanuelle';

export default function Exer6() {
    //estado com valor inicial
    const [isOpenned, setIsOpenned] = React.useState(false)
    return (
    //dinamizar se o isOpenned for true executa a div
      <div>
         {isOpenned && <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <ButtonEmanuelle label="Proceed" onClick={()=> setIsOpenned(false)}></ButtonEmanuelle>
         </div>
         }
         <ButtonEmanuelle label="Delete" onClick={()=> setIsOpenned(true)}></ButtonEmanuelle>
      </div>    
    );
}