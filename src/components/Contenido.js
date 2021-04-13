import React, { useState, Fragment } from 'react'
import Intro from './Intro'
import Pregunta from './Pregunta'


const Contenido = ({completado, guardarCompletado}) => {
    const [ nivel, guardarNivel ] = useState(1)

 
    const subirNivel = () => {
      guardarNivel(parseInt(nivel) + 1)
    }
    const subirNivel3 = () => {
      guardarNivel(parseInt(nivel) + 3)
    }
    const bajarNivel = () => {
      guardarNivel(parseInt(nivel) - 2)
    }


    const [ respuestas, guardarRespuestas ] = useState({
        respuesta1: '',
        respuesta2: '',
        respuesta3: '',
        respuesta4: '',
        respuesta5: '',
        respuesta6: '',
        respuesta7: '',
        respuesta8: '',
        respuesta9: '',
        respuesta10: '',
      })

    return ( 
        <Fragment>
            <Pregunta 
                nivel={nivel} 
                subirNivel={subirNivel}
                subirNivel3={subirNivel3}
                bajarNivel={bajarNivel}
                respuestas={respuestas} 
                guardarRespuestas={guardarRespuestas} 
                completado={completado}
                guardarCompletado={guardarCompletado}
            />
        </Fragment>
     );
}
 
export default Contenido;