import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
