import Data from "./pages/Data";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import About from "./pages/About";

import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import UserProtectedRoute from "./pages/auth/UserProtectedRoute";
import AdminProtectedRoute from "./pages/auth/AdminProtectedRoute";
import AdminLogin from "./pages/auth/AdminLogin";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import PayscaleDetails from "./pages/payscale/PayscaleDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <UserProtectedRoute>
            <Layout />
          </UserProtectedRoute>
        }
      >
        <Route index element={<Data />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route
        path="/"
        element={
          <AdminProtectedRoute>
            <Layout />
          </AdminProtectedRoute>
        }
      >
        <Route path="admin" element={<Admin />} />
        <Route path="admin/:id" element={<PayscaleDetails />} />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" elemment={<Logout />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
