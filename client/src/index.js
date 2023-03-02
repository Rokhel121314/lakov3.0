import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/featureroutes/Root";
import ErrorPage from "./routes/featureroutes/ErrorPage";
import Home from "./pages/landingpage/Home";
import Stock from "./pages/stocks/Stock";
import Pos from "./pages/pos/Pos";
import Transaction from "./pages/transactions/Transaction";
import Sales from "./pages/sales/Sales";
import Layout from "./routes/landingroutes/Layout";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import Feature from "./pages/landingpage/Feature";
import HowToUse from "./pages/landingpage/HowToUse";

const router = createBrowserRouter([
  {
    path: "/lako",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/lako/stocks",
        element: <Stock />,
      },
      {
        path: "/lako/pos",
        element: <Pos />,
      },
      {
        path: "/lako/transactions",
        element: <Transaction />,
      },
      {
        path: "/lako/sales",
        element: <Sales />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Feature />,
      },
      {
        path: "/howtouse",
        element: <HowToUse />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
