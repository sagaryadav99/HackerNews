import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export function NavBar() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  function logouthandler() {
    localStorage.removeItem("token");
    auth?.setLoggedIn(false);
    navigate("/");
  }

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-700 bg-gray-950 px-4 sm:px-8 py-2">
      <div
        onClick={() => navigate("/")}
        className="flex cursor-pointer items-center gap-[1px] font-semibold tracking-tight text-gray-100"
      >
        <span className="flex h-5 w-6 items-center justify-center rounded bg-blue-500 text-[20px] font-bold text-white">
          H
        </span>
        <span className="hidden sm:inline">acker News</span>
      </div>

      <div className="flex items-center gap-1">
        {!auth?.loggedIn ? (
          <>
            <Button
              className="cursor-pointer border border-blue-500/50 bg-blue-500/15 text-[13px] text-blue-500 hover:bg-blue-500/25"
              onClick={() => navigate("/register")}
            >
              register
            </Button>
            <Button
              className="cursor-pointer border border-gray-700 bg-transparent text-[13px] text-gray-500 hover:border-blue-500/40 hover:bg-gray-800 hover:text-blue-200"
              onClick={() => navigate("/login")}
            >
              login
            </Button>
          </>
        ) : (
          <>
            <Button
              className="cursor-pointer border border-gray-700 bg-transparent text-[13px] text-gray-500 hover:border-blue-500/40 hover:bg-gray-800 hover:text-blue-200"
              onClick={() => navigate("/bookmarks")}
            >
              bookmarks
            </Button>
            <Button
              className="cursor-pointer border-transparent bg-transparent text-[13px] text-gray-500 hover:bg-transparent hover:text-blue-500"
              onClick={logouthandler}
            >
              logout
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
