import { UserContext } from "./UserContext";
import { useState } from "react";

// const user = {
//     id: 123,
//     name: 'Luciana',
//     email: 'luciana@gmail.com'
// }

const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ hola:'Mundo', user: user }}>
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}

export  { UserProvider }