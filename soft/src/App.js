import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import SplashScreen from './Screens/SplashScreen/SplashScreen';
import Page2 from "./Screens/Page2/Page2";
import MyProjects from "./Components/Projects/MyProjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="myprojects" element={<MyProjects />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
