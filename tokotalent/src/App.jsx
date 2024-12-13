import Menu from "./pages/Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Home from "./pages/Index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Menu",
      element: <Menu />,
    },
    {
      path: "/Checkout",
      element: <Checkout />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
