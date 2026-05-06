import { createBrowserRouter } from "react-router-dom";

import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import QuestionDetail from '@/pages/QuestionDetail'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },

       {
        path: "/questions/:id",
        element: <QuestionDetail />,
      },
    ]
  },

  {
    path: "*",
    element: <NotFound />,
 }
]);

export default router;
