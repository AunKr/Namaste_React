import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import Search from "./pages/Search";
// ----------------------------------------------------------------------
// lazy loading for all pages
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "search", element: <Search /> },
      ],
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}
