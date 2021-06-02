import React from 'react';
import './styles/s7.css';
import {Wrapper} from './styles/styled';

import Dialeg, {r} from './components/Dialeg';


const App = ()=>{

  const [pos, setPos] =React.useState(0);
  const back = ()=> setPos(pos>0?pos-1:pos);
  const forw = ()=> setPos(pos<r?pos+1:pos);

  return (
    <Wrapper>
      <button onClick={()=>{back()}} className="bot50">Anterior</button>
      <button onClick={()=>{forw()}} className="bot50">Posterior</button>
      <Dialeg p={pos} />
    </Wrapper>
  );

}


export default App;
