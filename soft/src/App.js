import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import SplashScreen from './Screens/SplashScreen/SplashScreen';
import Page2 from "./Screens/Page2/Page2";
import Login from "./Screens/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
