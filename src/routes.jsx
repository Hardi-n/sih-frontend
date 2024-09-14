import { Route, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";

// Pages imports
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Alumini from "./pages/alumini";
import Student from "./pages/student";
const Routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    {/* Routes for different pages */}
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<SignUp/>}/>
    <Route path="alumini" element={<Alumini/>}/>
    <Route path="student" element={<Student/>}/>
    {/* Add other pages below */}
  </Route>
);

export default Routes;
