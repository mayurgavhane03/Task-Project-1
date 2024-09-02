import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HorizontalMenu from "./Components/HorizontalMenu";
import StudentGridView from "./Components/StudentGridView";

import About from "./Components/About";
import Home from "./Components/Home";
import StudentTileView from "./Components/StudentTileView,";
import DataTable from "./Components/DataTable";


const AppLayout = () => {
  return (
    <div>
      <HorizontalMenu />
      <Outlet /> 
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "grid", element: <DataTable /> },
      { path: "tile", element: <StudentTileView /> },
      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return (
    <div className="h-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
