// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import About from "./Pages/About";
import { TimerProvider } from "./context/TimerContext";
import Home from "./pages/Home";
import History from "./pages/History";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import About from "./pages/About";


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/history",
    element: <History />,
  },

   {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },


]);

const App = () => {
  return (
    <TimerProvider>
      <RouterProvider router={router} />
    </TimerProvider>
  );
};

export default App;