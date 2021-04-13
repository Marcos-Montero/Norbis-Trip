import React, { useState, Fragment } from 'react'
import Head from './components/Head'
import Contenido from './components/Contenido'
import Victoria from './components/Victoria'

function App() {
  const [ completado, guardarCompletado ] = useState(false)

  return (
    <Fragment>

      { completado ? 
      <Victoria />
      : 
      <Fragment>
          <Head />
          <Contenido
          completado={completado}
          guardarCompletado={guardarCompletado}
        />
      </Fragment>
      }

     </Fragment>
  );
}
export default App;
