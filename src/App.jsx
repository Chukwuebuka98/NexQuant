import Data from "./components/Data";
import HoursWorkedComponent from "./components/HoursWorkedComponent";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Data />} />)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
