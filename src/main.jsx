import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Syllabus from "./components/Syllabus.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/syllabus/stream/:name",
    element: <Syllabus />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
