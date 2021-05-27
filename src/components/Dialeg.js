import React from 'react';
import Linies from '../db/Linies.json'
import {Frase} from '../styles/styled';

export const r=Linies.length-1;

export const toto="totoculo";

const Dialeg = (props) =>{

    const linies = Linies.map((l,index)=>{
        return(
          <Frase id={`item-${index}`} className={index%2?`left`:`right`}> {l} </Frase>
        );
    });

    return (
    <div id="dialogo" data-rang={r}>
    {linies[props.p]}
    </div>
  );

}

export default Dialeg;
