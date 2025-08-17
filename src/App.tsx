import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "@/context/GameContext"; // or "@/context/GameContext" if you kept Option A split
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background relative overflow-hidden">
          <Background />
          <Navbar />
          <main className="relative z-10 max-w-6xl mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </GameProvider>
  );
}
