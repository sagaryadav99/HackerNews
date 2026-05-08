import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";

export function Layout() {
  return (
    <div className="min-h-screen w-full bg-black">
      <NavBar />
      <Outlet />
    </div>
  );
}
