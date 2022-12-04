import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: '/project/:projectId',
    element: <ProjectPage />,
  },
  {
    path: "/*",
    element: <Navigate to='/' />,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
