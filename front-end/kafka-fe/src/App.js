import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/jquery/dist/jquery.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";
import Dashboard from "./components/Dashboard";
import IntegrationNotistack from "./components/IntegrationNotistack";

import {
  Routes,
  Route,
  Router,
  useParams,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
