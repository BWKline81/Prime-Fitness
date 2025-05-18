import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactPage from "./Pages/ContactPage";
import CoachesPage from "./Pages/CoachesPage";
import TrainingPage from "./Pages/TrainingPage";
import NotFound from "./Pages/404";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Prime-Fitness/" element={<Home />} />
        <Route path="/Prime-Fitness/training" element={<TrainingPage />} />
        <Route path="/Prime-Fitness/coaches" element={<CoachesPage />} />
        <Route path="/Prime-Fitness/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
