import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { PageWrapper } from './components/layout/PageWrapper';
import { Home } from './pages/Home';
import { Directing } from './pages/Directing';
import { FilmProgramming } from './pages/FilmProgramming';
import { Journalism } from './pages/Journalism';
import { Producing } from './pages/Producing';

const Planeta = lazy(() => import('./pages/Planeta').then((m) => ({ default: m.Planeta })));

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const NotFound: React.FC = () => (
  <PageWrapper>
    <p className="text-[15px] text-ink-muted leading-relaxed">
      page not found.{' '}
      <Link to="/" className="text-ink hover:text-earth hover:underline decoration-earth/45">
        return home
      </Link>
    </p>
  </PageWrapper>
);

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-canvas text-ink">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/directing" element={<Directing />} />
            <Route path="/film-programming" element={<FilmProgramming />} />
            <Route path="/journalism" element={<Journalism />} />
            <Route path="/producing" element={<Producing />} />
            <Route
              path="/planeta"
              element={
                <Suspense fallback={null}>
                  <Planeta />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
