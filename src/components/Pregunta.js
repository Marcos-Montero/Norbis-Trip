import React, { useState } from 'react'
const Pregunta = ({respuestas, guardarRespuestas, nivel, subirNivel, bajarNivel, subirNivel3, completado, guardarCompletado}) => {


    const [respuesta, guardarRespuesta] = useState('')


    const actualizarRespuesta = e => {
        guardarRespuesta(e.target.value)
    }
    // diccionario de preguntas y respuestas
    const preguntas = {
        1: {
            p:'Hola Norbis. Si estás leyendo esto es porque estás en tus últimas horas del viaje hacia tus 24 años. Tienes la obligación de demostrarnos que los mereces o tendrás que atenerte a las consecuencias. Para continuar tu viaje, tendrás que introducir las palabras clave que encontrarás escritas en los rectángulos de proporciones áureas cifrados en números y palos, cuyo reverso es un tramado victoriano negro. (Introduce las claves siempre en minúsculas y sin tildes)',
            r: "amistad",
        },
        2: {
            p: 'La amistad es un alma que habita en dos cuerpos; un corazón que habita en dos almas... y dos son las frutas que reflejan uno de tus lazos más fuertes, el cual es observado mañana, tarde y noche. Vuelve una vez más a ellos para encontrar en su interior la respuesta a tu viaje.',
            r: "humor"
        },
        3: {
            p: 'La imaginación consuela al ser humano por lo que no es; el sentido del humor le consuela por lo que es. Por lo tanto, Norbis, aprovecha tu momento y si la vida te da limones, hazte una limonada y culmina así tu travesía',
            r: "resolucion"
        },
        4: {
            p: `El mundo será de los que se animen a ver más allá.
            (
                No te dejes ceg4r p0.r est4s cu4tro paredes y si9u3 el más 8rillante foco 6e lu7, sal - d3.l feli7 hogar a1 6alcón en 8usca de tu5 obj3tiv0s
            )
            `,
            r: "amor"
        },
        5: {
            p: "La vida necesita amor y no existe amor sin flores, como no existen flores sin luz. Ahora Norbis, Sal a la luz de la calle y recoge esa flor que nunca te decides a regalar a tu pareja. Pero no cualquier flor. Al final del sendero ascendente que sale de tu hogar hallarás la travesía de la Reina. La flor y tu siguiente enseñanza te aguardan en la isla que hay en el centro de dicha travesía. Hazte con ‘la flor más roja de todas’ y tu camino se abrirá.",
            r: "compartir"
        },
        6: {
            p: "Enhorabuena! Te has hecho con la flor más roja de todas. Pero cuidado, porque lo que no se da se pierde. Todo cuanto conseguimos no sirve de nada si no es compartido, Norbis. Te toca ahora entregar la flor más roja para continuar tu viaje. Continua la avenida de la reina hacia oriente y te cruzarás la travesía de los estudiantes. Allí hallarás El Gabaldón, la famosa taberna. Comparte tu flor allí y hallarás las respuestas que ansías.",
            r: "sacrificio"
        },
        7: {
            p: "Dar es recibir y ahora lo sabes mejor que nadie. Pero, para dar, primero hay que tener lo que solo el sacrificio puede conseguir. Tienes que ir a las puertas del mercado Sodio. Pero esta vez tienes solo 5 minutos. ¡Sal corriendo por el recorrido más corto! si no llegas a tiempo atente a las consecuencias.",
            r: "atencion"
        },
        8: {
            p: "¡ Lo conseguiste ! Pero quien conoce el verdadero sacrificio, es también un experto en el descanso. Tómate un tiempo para respirar antes de adentrarte en el mercado Sodio. Necesitamos que recuperes toda tu capacidad perceptiva. (...) ¿Ready?... Según entras, en la parte alta del primer pasillo hallarás, si buscas con atención, la respuesta que más cuesta. La llave a tu destino es el producto más caro del primer pasillo.",
            r: "vicio",
            r2: "seguridad"
        },
        9: {
            p: "Bingo! Una hazaña de hallazgo. Mas no es oro todo lo que brilla y quien sabe dar con el que más vale de los productos, ha de conocer también lo que menos vale para tener la perspectiva necesaria. Quizá la respuesta a todas tus preguntas se encuentre ahora en el producto que menos vale de este mismo pasillo.",
            r: "error"
        },
        10: {
            p: "Diste con la respuesta! Enhorabuena. Conoces lo que más vale y también lo que menos, has aumentado tu perspectiva. Ahora solo te hace falta reconocer tus errores. Reflexiona sobre tus errores y vuelve a pensar en cuál es el primer pasillo del mercado sodio y encuentra en él la llave a tu destino. Introduce 'bucle' para volver a la pregunta 8 y dar con la respuesta.",
            r: "bucle"
        },
        11: {
            p: "Ahora sí. La verdadera perspectiva se gana cuando se toma distancia y, con verdadera atención, se valoran los detalles por encima de las cosas que más y las que menos brillan. Es en el detalle donde encuentras las verdaderas respuestas que más cuestan. Es hora de regresar al hogar con el espíritu renovado por las enseñanzas de nuestro viaje, Norbis. Uno tiene que saber guardar todo aquello que aprende como lo más preciado de su ser. Ahora te toca usar la llave que has conseguido y abrir con ella la seguridad de tu hogar para almacenar en él estas valiosas enseñanzas. Imagino que te haces una idea de dónde encontrar tu respuesta, lo que aún no sabes es que desde que has empezado a leer esta pregunta ha empezado una cuenta atrás de 10 minutos. Si no la abres antes de que acabe la cuenta atrás tu futuro se cerrará para siempre.",
            r: "sueños"
        },
        12: {
            p: "Mírate Norbis... ¡LO HAS LOGRADO! Ha sido un largo viaje lleno de dificultades de todo tipo pero ahora tienes las más valiosas enseñanzas en el bolsillo. Has demostrado merecerte esos 24 añazos y se abre ante ti un prometedor año por delante para seguir persiguiendo tus sueños junto a tus compañeros. Solo queda una última prueba: Retratar el momento. Vuela balcón afuera y mírate, míranos a todos, e inmortaliza este momento tan valioso para el resto de tu vida. Enhorabuena Norbis. Felices 24.",
            r: "felicidades"
        },
    }

    // PREGUNTAS Defino las preguntas por nivel
    let pregunta = ""
    switch (nivel) {
        default:
            pregunta = preguntas[1].p
            break
        case 1:
            pregunta = preguntas[1].p
            break
        case 2:
            pregunta = preguntas[2].p
            break
        case 3:
            pregunta =preguntas[3].p
            break
        case 4:
            pregunta = preguntas[4].p
            break
        case 5:
            pregunta = preguntas[5].p
            break
        case 6:
            pregunta = preguntas[6].p
            break
        case 7:
            pregunta = preguntas[7].p
            break
        case 8:
            pregunta = preguntas[8].p
            break
        case 9:
            pregunta = preguntas[9].p
            break
        case 10:
            pregunta = preguntas[10].p
            break
        case 11:
            pregunta = preguntas[11].p
            break
        case 12:
            pregunta = preguntas[12].p
            break
    }
    // RESPUESTAS según el nivel, validamos la respuesta correcta
    const submitRespuesta = e => {

        const nivelNormal = () => {
            alert('¡ RESPUESTA CORRECTA !')
            subirNivel()
            guardarRespuesta('')
        }

        e.preventDefault()
        switch (nivel){
            default:
                if(respuesta===preguntas[1].r){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta1: respuesta})
                    nivelNormal()
                } else {
                    alert('Respuesta Incorrecta, inténtalo de nuevo...')}
                break
            case 1:
                if(respuesta===preguntas[1].r){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta1: respuesta})
                    nivelNormal()
                } else {
                    alert('Respuesta Incorrecta, inténtalo de nuevo...')}
                break
            case 2:
                if(respuesta===preguntas[2].r){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta2: respuesta
                    })
                    nivelNormal()
                } else {
                    alert('Respuesta Incorrecta, inténtalo de nuevo...')}
                break
            case 3:
                if(respuesta===preguntas[3].r){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta3: respuesta
                    })
                    nivelNormal()
                } else {
                    alert('Respuesta Incorrecta, inténtalo de nuevo...')}
                break
            case 4:
                if(respuesta===preguntas[4].r){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta4: respuesta
                    })
                    nivelNormal()
                } else {
                    alert('Respuesta Incorrecta, inténtalo de nuevo...')}
                break
            case 5:
                if(respuesta===preguntas[5].r){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta5: respuesta
                    })
                    nivelNormal()
                } else {
                    alert('Respuesta Incorrecta, inténtalo de nuevo...')}
                break
            case 6:
                if(respuesta===preguntas[6].r){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta6: respuesta
                    })
                    nivelNormal()
                } else {
                    alert('Respuesta Incorrecta, inténtalo de nuevo...')}
                break
            case 7:
                if(respuesta===preguntas[7].r){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta7: respuesta
                    })
                    nivelNormal()
                } else {
                    alert('Respuesta Incorrecta, inténtalo de nuevo...')}
                break
            case 8:
                if(respuesta===preguntas[8].r){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta8: respuesta
                    })
                    nivelNormal()
                } else if (respuesta===preguntas[8].r2){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta8: respuesta
                    })
                    alert('¡ RESPUESTA CORRECTA !')
                    subirNivel3()
                    guardarRespuesta('')
                } else {
                    alert('Respuesta Incorrecta, inténtalo de nuevo...')}
                break
            case 9:
                if(respuesta===preguntas[9].r){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta9: respuesta
                    })
                    nivelNormal()
                } else {
                    alert('Respuesta Incorrecta, inténtalo de nuevo...')}
                break
            case 10:
                if(respuesta===preguntas[10].r){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta10: respuesta
                    })
                    alert('Volviendo a la pregunta 8... ')
                    bajarNivel()
                    guardarRespuesta('')
                } else {
                    alert('Respuesta Incorrecta, inténtalo de nuevo...')}
                break
            case 11:
                if(respuesta===preguntas[11].r){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta11: respuesta
                    })
                    nivelNormal()
                } else {
                    alert('Respuesta Incorrecta, inténtalo de nuevo...')}
                break
            case 12:
                if(respuesta===preguntas[12].r){
                    guardarRespuestas({
                        ...respuestas,
                        respuesta12: respuesta
                    })
                    nivelNormal()
                    guardarCompletado(true)
                } else {
                    alert('Respuesta Incorrecta, inténtalo de nuevo...')}
                break
        }

    }
    let tituloPregunta =""
    if (parseInt(nivel) === 1){
        tituloPregunta = "Inicio"
    }  else if (parseInt(nivel) === 11 ){
        tituloPregunta = preguntas[8].r2
    } else {
        tituloPregunta = preguntas[parseInt(nivel)-1].r
    }
    return ( 
        <div className="row center">

            <div className="row">
            </div>

            <div className="row">

                <div className="col s12 center">
                    {completado?<h1 id="victory">WINNER</h1>:null}
                    <h4 className="pregunta">{nivel}: {tituloPregunta}</h4>
                    <p className="pregunta">{pregunta}</p>
                    <form 
                        className="form"
                        onSubmit={submitRespuesta} >

                        <div className="input-field secondary">
                            <input 
                                id="respuesta"
                                type="text" 
                                className="form-control"
                                onChange={actualizarRespuesta}/>
                        </div>
                        <input
                            className="btn purple darken-3"
                            type="submit"
                            value="introducir"
                            />
                    </form>
                </div>
            </div>
        </div>
        
     );
}
export default Pregunta;