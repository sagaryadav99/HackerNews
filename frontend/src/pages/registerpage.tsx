import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
  const username = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [invalid, setInvalid] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  async function onclickhandler() {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    try {
      await axios.post(`${BACKEND_URL}/api/auth/register`, {
        username: username.current?.value,
        name: name.current?.value,
        password: password.current?.value,
      });
      navigate("/login");
    } catch (e) {
      setInvalid(true);
      if (axios.isAxiosError(e)) {
        setMessage(e.response?.data.message ?? "user not created");
      } else {
        setMessage("something went wrong");
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-start py-8 justify-center px-4">
      <Card className="w-full max-w-sm border-gray-700 bg-gray-900 text-gray-100">
        <CardHeader>
          <CardTitle className="text-gray-100">Create Account</CardTitle>
          <CardDescription className="text-gray-500">
            Enter your username, name and password below to create your account
          </CardDescription>
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
                <Label htmlFor="name" className="text-gray-400">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  ref={name}
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
            Create Account
          </Button>
          <p className="text-[13px] text-gray-500">
            Already have an account?{" "}
            <span
              className="cursor-pointer text-blue-500 hover:text-blue-400"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
          {invalid ? <p className="text-red-500">{message}</p> : null}
        </CardFooter>
      </Card>
    </div>
  );
}
