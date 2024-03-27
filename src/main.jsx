import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Destination from "./pages/Destination/Destination.jsx";
import Crew from "./pages/Crew/Crew.jsx";
import Technology from "./pages/Technology/Technology.jsx";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
