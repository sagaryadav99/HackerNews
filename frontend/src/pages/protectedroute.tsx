import { AuthContext } from "@/context/authContext";
import { useContext, type ReactNode } from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const auth = useContext(AuthContext);

  if (!auth?.loggedIn) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ message: "Please sign in first" }}
      />
    );
  }

  return <>{children}</>;
}
