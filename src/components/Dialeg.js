import React from 'react';
import Linies from '../db/Linies.json'
import {Frase} from '../styles/styled';

export const r=Linies.length-1;

const Dialeg = (props) =>{

    const linies = Linies.map((l,index)=>{
        return(
          <Frase id={`item-${index}`} className={props.p==index?"mark":"nomark"}
          > {l} </Frase>
        );
    });

    return (
    <div id="dialogo" data-rang={r}>
    {linies}
    </div>
  );

}


export default Dialeg;
