import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayOut from "./components/HomeLayOut";
import HomePage from "./components/HomePage";
import { Login, MenuBar, Register } from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayOut />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    // {
    //   path: "Login",
    //   element: <Login />,
    // },
    // {
    //   path: "Register",
    //   element: <Register />,
    // },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
