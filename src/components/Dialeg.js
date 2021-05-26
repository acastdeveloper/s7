import React from 'react';
import Linies from '../db/Linies.json'

export default _ =>{

  const linies = Linies.map((l)=>{
    return(
      <p>{l}</p>
    );
  });


  return (
    <>
      {linies}
    </>
  );




}
