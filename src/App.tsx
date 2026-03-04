import { DotGrid } from "@/components/animations";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {
  About,
  Certifications,
  Contact,
  Education,
  Experience,
  Intro,
  Projects,
  Skills,
} from "@/components/sections";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={45}
          baseColor="rgba(0,0,0,0.12)"
          activeColor="#5227FF"
          proximity={120}
        />
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <Navbar />
      </div>

      <div className="relative z-10">
        <Intro />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
