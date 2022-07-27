
import React from 'react';
import Header from "./Component/header";
import Tes from "./Component/module/tes";
import {Button,Input} from "./Component/name"

function App(){
  
  return(
    <React.Fragment>
      <h1>Latihan Export Import</h1>
      <Header/>
      <Tes/>
      <Input/>
      <Button/>
    </React.Fragment>
  )
}

// export nama bisa 1 komponen atau lebih

export default App;
