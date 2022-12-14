import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Dashboard/Home";
import Users from "./pages/Dashboard/Users";
import Contact from "./pages/Dashboard/Contact";
import Menu from "./components/Menu"
import UserDetails from "./pages/Dashboard/UserDetails";
import Login from "./pages/Auth/Login";
import DashboardLayouts from "./layouts/Dashboard/index";
import AuthLayout from "./layouts/Auth/index";
import Register from "./pages/Auth/Register";
import Error404 from "./pages/Error404";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayouts />}>
                <Route index element={<Home />} />
                <Route path="users" element={<Users />} />
                <Route path="users/:id" element={<UserDetails />} />
                <Route path="contact" element={<Contact />} />
        </Route> 
        <Route path="auth" element={<AuthLayout />}>
                <Route index="login" element={<Login />} />
                <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error404 />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
