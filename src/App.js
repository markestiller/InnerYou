import "./App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import StartingPage from "./pages/StartingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ToDo from "./pages/todo";
import Journ from "./pages/journ";
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
    path: "/journ",
    element: <Journ/>,
  },
  {
    path: "/todo",
    element: <ToDo />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
