import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import AdminDashboard from "./pages/dashboard-page/AdminDashboard";
import TicketPage from "./pages/tickets-page/TicketPage";
import ErrorPage from "./pages/error-page/ErrorPage";
import AllTasks from "./pages/all-tasks/AllTasks";
import UnresolvedTicket from "./pages/unresolved-ticket/UnresolvedTicket";

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
    {
      path: "/all-tasks",
      element: <AllTasks />,
    },
    {
      path: "/unresolved-tasks",
      element: <UnresolvedTicket />,
    },
  ]);
  return (
    <div className="bg-light_background dark:bg-dark_background transition">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
