import { createBrowserRouter } from "react-router-dom";

import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import QuestionDetailPage from '@/pages/QuestionDetailPage'
import AskQuestionPage from "@/pages/AskQuestionPage";
import NotFound from '@/pages/NotFound'
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "@/pages/ProfilePage";

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

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/profile",
            element: <ProfilePage />,
          }
        ]
      },
    ]
  },

  {
    path: "*",
    element: <NotFound />,
 }
]);

export default router;
