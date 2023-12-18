import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import AllProjects from "./Components/AllProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "allprojects",
    element: <AllProjects/>,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);