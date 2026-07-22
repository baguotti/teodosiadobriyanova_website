import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Directing } from './pages/Directing';
import { FilmProgramming } from './pages/FilmProgramming';
import { Journalism } from './pages/Journalism';
import { Producing } from './pages/Producing';
import { Planeta } from './pages/Planeta';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between bg-[#F9F7F2] text-[#2B2927]">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/directing" element={<Directing />} />
            <Route path="/film-programming" element={<FilmProgramming />} />
            <Route path="/journalism" element={<Journalism />} />
            <Route path="/producing" element={<Producing />} />
            <Route path="/planeta" element={<Planeta />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
