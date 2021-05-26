import React from 'react';
import Linies from '../db/Linies.json'

import {Cuadrado} from '../styles/styled';

export default _ =>{

  const linies = Linies.map((l)=>{
    return(
      <Cuadrado>{l}</Cuadrado>
    );
  });


  return (
    <>
      {linies}
    </>
  );




}
