import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Mensagem from './Mensagem';
import Contador from './Contador';
import Formulario from './Formulario';
import Tarefas from './Tarefas';

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Olá React!</h1>
      <p className="lead text-center">
        Este é o teu primeiro componente React.
      </p>
      {/* Evento onClick em React usa camelCase e chama uma função */}
      <button
        className="btn btn-success d-block mx-auto"
        onClick={() => alert('Olá, Davi!')}
      >
        Clica-me!
      </button>

      <Contador />
      <h1 className="text-center">Componentes e Props</h1>
      {/* Cada componente recebe props diferentes */}
      <Mensagem myText="Bem-vindo à tua primeira aplicação React!" />
      <Mensagem myText="Os componentes permitem reutilizar código!" />
      <Formulario/>
      <Tarefas/>

    </div>
  );
}

export default App
