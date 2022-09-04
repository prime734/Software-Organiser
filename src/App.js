import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './Screens/Login/Login';
import MyProjects from './Components/Projects/MyProjects';
import SplashScreen from './Screens/SplashScreen/SplashScreen';
import SignUp from "./Screens/SignUp/SignUp";
import Landing from "./Screens/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprojects" element={<MyProjects />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
