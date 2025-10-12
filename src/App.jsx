import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
// import ProjectDetail from "./pages/ProjectDetail";
// import Contact from "./pages/Contact";
 import NotFound from "./pages/NotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => (
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-[#0f172a]">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/projects/:slug" element={<ProjectDetail />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
);

export default App;
