import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const HomePage = () => {
  const { user, setUser }  = useContext(UserContext);

  if (!setUser) {
    throw new Error("setUser is not defined in UserContext");
  }

  return (
    <>
      <h1>HomePage <small>{ user?.name }</small></h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <button 
        className="btn btn-primary"
        onClick={ () => setUser({ id: 123, name: 'Luciana', email: 'luciana@gmai.com' }) }
        >
        Establecer usuario
      </button>


    </>
  );
};

export { HomePage };
