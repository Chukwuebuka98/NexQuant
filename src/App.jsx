import Data from "./pages/Data";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import About from "./pages/About";
import History from "./pages/History";
import Payscale from "./pages/Payscale";
import Profile from "./pages/Profile";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* <Route index element={<Data />} /> */}
      <Route path="about" element={<About />} />
      <Route path="history" element={<History />} />
      <Route path="payscale" element={<Payscale />} />
      <Route path="admin" element={<Admin />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
