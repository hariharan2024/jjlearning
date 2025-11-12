import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

import Home from "./pages/Home";
// import About from "./routes/About";
// import Programs from "./routes/Programs";
// import Workshops from "./routes/Workshops";
// import Gallery from "./routes/Gallery";
// import Blog from "./routes/Blog";
// import Contact from "./routes/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/about", element: <About /> },
      // { path: "/programs", element: <Programs /> },
      // { path: "/workshops", element: <Workshops /> },
      // { path: "/gallery", element: <Gallery /> },
      // { path: "/blog", element: <Blog /> },
      // { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

