import { useMemo, useState } from "react";
import { useCounter } from "../Hooks/useCounter.js";



const heavyStuff = ( iterationNumber = 100 ) => {
    for( let i = 0; i < iterationNumber; i++ ) {
        console.log('Mas uno...')
    }

    return `${ iterationNumber } iteraciones realizadas`
}



const MemoHook = () => {

    const { counter, increment } = useCounter( 4000 );
    const [show, setShow] = useState(true);
                        // no se renderiza de nuevo el counter porque no cambio al apretar un boton que no es el de +1
                        // memoriza este valor y lo renderizas si las dependecuas cambian [counter]
    const memorizeValue = useMemo( () => heavyStuff( counter ), [counter] );

  return (
    <>
        <h1>Counter:  <small>{ counter }</small></h1>
        <hr />

        <h4>{ memorizeValue }</h4>

        <button 
            onClick={ increment } 
            className="btn btn-primary"
        >
                +1
        </button>

        <button 
            className="btn btn-outline-primary"
            onClick={ () => setShow( !show ) }
        >
            Show/Hide { JSON.stringify(show) }
        </button>
    </>
  )
}

export { MemoHook }