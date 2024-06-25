import { useContext } from "react"
import { UserContext } from "../context/UserContext";

const LoginPage = () => {

  // const data = useContext( UserContext );
  //puedo desestructurar la data
  const { user } = useContext( UserContext );

    return (
      <>
        <h1>LoginPage</h1>
        <hr />

        <pre area-label='pre'>
          { JSON.stringify( user, null, 3)}
        </pre>
      </>
    )
  }
  
  export { LoginPage }