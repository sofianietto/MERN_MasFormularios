
import { useState } from 'react';
import UserForm from '../../pruebaa/src/componentes/UserForm';
import Resultados from './componentes/Resultados';
import './App.css';

function App() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: ""
  });
  return (
    <>
      <div className='container mt-5'>
        <h1>1. formulario con hooks</h1>
        <UserForm inputs={state} setInputs={setState} />
        <Resultados data={state} />
      </div>
    </>
  )
}

export default App
