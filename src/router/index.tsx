import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login, Forgot, Reset } from "../pages";

export const AppRouter = () => {
  const routes = [
    {
      path: "/auth/login",
      element: <Login />,
    },
    {
      path: "/auth/forgot-password",
      element: <Forgot />,
    },
    {
      path: "/auth/reset-password",
      element: <Reset />,
    },
    {
      path: "*",
      element: <Navigate to="/auth/login" replace={true} />,
    },
  ];

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
