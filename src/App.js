import "./App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import StartingPage from "./pages/StartingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/startingpage",
    element: <StartingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/journal",
    element: <journal />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
