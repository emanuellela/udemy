import React from 'react';

// don't change the Component name "App"
export default function Exer4() {
    //criei um estado com valor inicial
    const [isOpenned, setIsOpenned] = React.useState(false)
    return (
    //dinamicando - se o isOpenned for true executa a div
      <div>
         {isOpenned && <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={()=> setIsOpenned(false)} >Proceed</button>
        </div>
      }
        <button onClick={()=> setIsOpenned(true)}>Delete</button>
      </div>    
    );
}