import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="px-8 flex justify-between items-center border-b border-gray-200/20">
      <div className="text-white font-bold spacing-wide">News</div>
      <div>
        <Button
          className="cursor-pointer"
          variant="secondary"
          onClick={() => {
            navigate("/register");
          }}
        >
          register
        </Button>
        <Button
          className="cursor-pointer"
          variant="outline"
          onClick={() => {
            navigate("/login");
          }}
        >
          login
        </Button>
        <Button
          className="cursor-pointer"
          variant="ghost"
          onClick={() => {
            navigate("/login");
          }}
        >
          logout
        </Button>
      </div>
    </div>
  );
}
