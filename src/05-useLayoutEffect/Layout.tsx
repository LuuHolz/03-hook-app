

// DEBE ACTUALIZAR VIDEO



// import { useCounter } from "../Hooks/useCounter";
// import { useFetch } from "../Hooks/useFetch";
// import { LoadingMessage } from "../03-examples/LoadingMessage";
// import { PokemonCard } from "../03-examples/PokemonCard";

// const Layout = () => {
//     const { counter, decrement, increment } = useCounter( 1 );
//     const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`); 

//   return (
//     <>
//         <h1>Información del pokemón</h1>
//         <hr />

//         { isLoading 
//             ? <LoadingMessage/> 
//             : <PokemonCard 
//                 id={ data.id } 
//                 name={ data.name } 
//                 sprites={ [
//                     data.sprites.front_default,
//                     data.sprites.front_shiny,
//                     data.sprites.back_default,
//                     data.sprites.back_shiny,
//                 ] }
//             /> 
//         }

//         <button onClick={ () => counter > 1 ? decrement() : null } className="btn btn-primary">Anterior</button>
//         <button onClick={ () => increment() } className="btn btn-primary">Siguiente</button>

//     </>
// )
// }

// export { Layout }