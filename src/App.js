import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './Screens/Login/Login';
import MyProjects from './Components/Projects/MyProjects';
import SplashScreen from './Screens/SplashScreen/SplashScreen';
import SignUp from "./Screens/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="Signup" element={<SignUp />} />
        <Route path="Login" element={<Login />} />
        <Route path="myprojects" element={<MyProjects />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
