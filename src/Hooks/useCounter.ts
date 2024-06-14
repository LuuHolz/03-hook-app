import { useState } from "react"


const useCounter = ( initialValue = 10 ) => {

    const [ counter, setCounter ] = useState( initialValue )

    const increment = () => {
        setCounter( counter + 1 );
    }
    
    const decrement = () => {
        if ( counter === 0) return;

        setCounter( counter - 1);
    }

    const reset = () => {
        setCounter( initialValue );
    }

    const decrementTwo = ( value: number ) => {
        setCounter( counter + value )
    }

  return {
    counter, increment, reset, decrement, decrementTwo

  }
}

export { useCounter }