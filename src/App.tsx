import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import AdminDashboard from "./pages/dashboard-page/AdminDashboard";
import TicketPage from "./pages/tickets-page/TicketPage";
import ErrorPage from "./pages/error-page/ErrorPage";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/overview",
      element: <AdminDashboard />,
    },
    {
      path: "/tickets",
      element: <TicketPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
