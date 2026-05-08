import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/context/authContext";
import axios from "axios";
import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function Login() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const timer = setTimeout(function () {
      if (!auth?.loggedIn) {
        toast.error("You are not logged in, Login first", { duration: 2000 });
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  async function onclickhandler() {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    try {
      const result = await axios.post(`${BACKEND_URL}/api/auth/login`, {
        username: username.current?.value,
        password: password.current?.value,
      });
      localStorage.setItem("token", result.data.token);
      auth?.setLoggedIn(true);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-start py-12 justify-center px-4">
      <Card className="w-full max-w-sm border-gray-700 bg-gray-900 text-gray-100">
        <CardHeader>
          <CardTitle className="text-gray-100">
            Login into your account
          </CardTitle>
          <CardDescription className="text-gray-500">
            Enter your username and password below to login to your account
          </CardDescription>
          <CardAction>
            <Button
              variant="link"
              className="text-blue-500 hover:text-blue-400"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username" className="text-gray-400">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  required
                  ref={username}
                  className="border-gray-700 bg-gray-950 text-gray-100 placeholder:text-gray-600 focus-visible:ring-blue-500/50"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-gray-400">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  ref={password}
                  className="border-gray-700 bg-gray-950 text-gray-100 placeholder:text-gray-600 focus-visible:ring-blue-500/50"
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button
            className="w-full border border-blue-500/50 bg-blue-500/15 text-blue-500 hover:bg-blue-500/25 hover:text-blue-400"
            onClick={onclickhandler}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
