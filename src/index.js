import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "portfolio",
    element: <Portfolio/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);