import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Mensagem from './Mensagem';
import Contador from './Contador';
import Formulario from './Formulario';
import Notas from './Notas';
import Alerta from './Alerta';

function App() {
  return (
    <div className="container mt-4">
    
      <h1 className="text-left">Cálculo da nota Final</h1>
      <h2 className="text-left">Dados do Aluno</h2>

      <Notas/>

      </div>
  );
}

export default App
