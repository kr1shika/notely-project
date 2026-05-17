import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

import Landing from "./pages/Landing";
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

  ];
  const routes = createBrowserRouter([...allroutes]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
