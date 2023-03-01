import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Home from "./pages/homepage/Home";
import Stock from "./pages/stocks/Stock";
import Pos from "./pages/pos/Pos";
import Transaction from "./pages/transactions/Transaction";
import Sales from "./pages/sales/Sales";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/stocks",
        element: <Stock />,
      },
      {
        path: "/pos",
        element: <Pos />,
      },
      {
        path: "/transactions",
        element: <Transaction />,
      },
      {
        path: "/sales",
        element: <Sales />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
