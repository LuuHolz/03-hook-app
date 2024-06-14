import { useCounter } from "../Hooks/useCounter"

const CounterWithCustomHook = () => {

    const { counter, increment, reset, decrement, decrementTwo } = useCounter();
    

  return (
    <>
        <div>Counter with Hook: { counter }</div>
        <hr />
        <button className="btn btn-primary" onClick={ increment }>+1</button>
        <button className="btn btn-primary" onClick={ decrement }>-1</button>
        <button className="btn btn-primary" onClick={ () => decrementTwo(2) }>+2</button>
        <button className="btn btn-primary" onClick={ reset }>reset</button>
    </>
  )
}

export { CounterWithCustomHook }