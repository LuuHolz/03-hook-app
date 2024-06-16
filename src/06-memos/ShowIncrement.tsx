
const ShowIncrement = ({ increment }) => {

    console.log('Se vuelve a generar aunque el boton no haya sufrido cambio');

  return (
    <button
        className="btn btn-primary"
        onClick={() => { increment( 5 ) }}
    >
        Incrementar
    </button>
  )
}

export { ShowIncrement }