import { createContext } from "react";

type User = {
    id: number;
    name: string;
    email: string;
  }

  type UserContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>> | null;
  }

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: null,
  });