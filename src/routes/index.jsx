import { createBrowserRouter } from "react-router-dom";

import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import QuestionDetailPage from '@/pages/QuestionDetailPage'
import AskQuestionPage from "@/pages/AskQuestionPage";
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

      {
        path: "/questions/ask",
        element: <AskQuestionPage />,
      },
    ]
  },

  {
    path: "*",
    element: <NotFound />,
 }
]);

export default router;
