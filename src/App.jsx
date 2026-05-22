import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotesWorkspace from './pages/workspace';

function App() {

  const allroutes = [
    {
      path: "/workspace",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <NotesWorkspace />
        </Suspense>
      ),
    },
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Landing />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/register",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Register />
        </Suspense>
      ),
    },

  ];
  const routes = createBrowserRouter([...allroutes]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
