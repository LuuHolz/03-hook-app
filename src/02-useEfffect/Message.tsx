import { useEffect, useState } from "react"

const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});
    

    useEffect(() => {

        const onMouseMove = ({ x, y}: { x: number, y: number}) => {
            // const coords = { x, y};
            setCoords({ x, y});
        }

        window.addEventListener( 'mousemove', onMouseMove);
        // console.log( 'Muestro mensaje entonces activo mousemove')


    //limpieza
    return () => {

        window.removeEventListener( 'mousemove', onMouseMove);
        // console.log( 'El mensaje no se muestra,entonces remuevo el mousemove')
    }
    }, []);


  return (
    <>
        <h3>Usuario ya existente</h3>
        { JSON.stringify( coords) }
    </>
  )
}

export  { Message }