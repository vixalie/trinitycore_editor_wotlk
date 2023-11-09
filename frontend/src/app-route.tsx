import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/about/About";

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "app",
    children: [
      { path: "/", element: null },
      { path: "/about", element: <About /> },
    ],
  },
]);
