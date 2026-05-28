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
    
      <h2 className="text-left">Cálculo da nota Final</h2>
      <h4 className="text-left">Dados do Aluno</h4>

      <Notas/>

      </div>
  );
}

export default App
