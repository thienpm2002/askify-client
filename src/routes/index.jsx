import { createBrowserRouter } from "react-router-dom";

import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import QuestionDetailPage from '@/pages/QuestionDetailPage'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },

       {
        path: "/questions/:id",
        element: <QuestionDetailPage />,
      },
    ]
  },

  {
    path: "*",
    element: <NotFound />,
 }
]);

export default router;
