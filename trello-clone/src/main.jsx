import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form";
import Dashboard from "./containers/Dashboard";
import Inbox from "./containers/Inbox";
import ProjectDetails from "./containers/ProjectDetails";
import Space from "./containers/Space";
import Statistics from "./containers/Statistics";
import { DataProvider } from "./contexts/DataContext";

import ErrorPage from "./error-page";
import "./index.css";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // { element: <Demo />, path: "/demo/:id" },
      { element: <Dashboard />, path: "/dashboard" },
      { element: <Statistics />, path: "/statistics" },
      { element: <Space />, path: "/space" },
      { element: <Inbox />, path: "/inbox" },
      { element: <ProjectDetails />, path: "/projects/:id" },
      { element: <Form />, path: "/projects/create" },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
