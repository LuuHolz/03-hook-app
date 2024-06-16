import { useState } from "react";
import { useCounter } from "../Hooks/useCounter";
import { Small } from '../06-memos/Small.jsx';

const Memorize = () => {

    const { counter, increment } = useCounter( 10 );
    const [show, setShow] = useState(true);

  return (
    <>
        <h1>Counter:  <Small value={ counter }/></h1>
        <hr />

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

export { Memorize }