import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactPage from "./Pages/ContactPage";
import CoachesPage from "./Pages/CoachesPage";
import TrainingPage from "./Pages/TrainingPage";
import NotFound from "./Pages/404";

function App() {
  return (
    <HashRouter basename="/Prime-Fitness/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="training" element={<TrainingPage />} />
        <Route path="coaches" element={<CoachesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
