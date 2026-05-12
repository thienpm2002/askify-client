import { createBrowserRouter } from "react-router-dom";

import MainLayout from '@/layouts/MainLayout'

import HomePage from '@/pages/HomePage'

import QuestionDetailPage from '@/pages/QuestionDetailPage'
import EditQuestionPage from "@/pages/EditQuestionPage";

import AskQuestionPage from "@/pages/AskQuestionPage";

import NotFound from '@/pages/NotFound'
import ProtectedRoute from "./ProtectedRoute";

import ProfilePage from "@/pages/ProfilePage";

import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from '@/pages/RegisterPage'

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
        path: "/questions/:id/edit",
        element : <EditQuestionPage />
      },

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/profile",
            element: <ProfilePage />,
          },
        ]
      },
    ]
  },

  {
    element: <AuthLayout />,
    children: [
        {
          path: "/login",
          element: <LoginPage />
        },
         {
          path: "/register",
          element: <RegisterPage />
        }
    ]
  },

  {
    path: "*",
    element: <NotFound />,
 }
]);

export default router;
