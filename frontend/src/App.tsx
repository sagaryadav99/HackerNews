import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Login } from "./pages/loginpage";
import { Register } from "./pages/registerpage";
import { LandingPage } from "./pages/landingpage";
import { Bookmarks } from "./pages/bookmarkspage";
import { ProtectedRoute } from "./pages/protectedroute";
import { Toaster } from "sonner";
function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="top-center" theme="dark" />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/bookmarks"
            element={
              <ProtectedRoute>
                <Bookmarks />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
