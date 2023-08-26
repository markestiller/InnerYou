import "./App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
