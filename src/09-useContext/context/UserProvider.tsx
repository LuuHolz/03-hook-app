import { UserContext } from "./UserContext";
import { useState, ReactNode } from "react";

type User = {
    id: number;
    name: string;
    email: string;
  }

  type UserProviderProps = {
    children: ReactNode;
  }

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);

  return (
    // <UserContext.Provider value={{ hola:'Mundo', user: user }}>
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}

export  { UserProvider }