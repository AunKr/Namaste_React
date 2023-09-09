import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import AppLayout from "./layouts/AppLayout";
import Search from "./pages/Search";
import RestaurantMenu from "./pages/RestaurantMenu";
// ----------------------------------------------------------------------
// lazy loading for all pages
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "search", element: <Search /> },
        {
          path: "/restaurant/:restId",
          element: <RestaurantMenu />,
        },
      ],
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}
