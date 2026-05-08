import { createContext } from "react";

type AuthContextType = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AuthContext = createContext<AuthContextType | null>(null);
