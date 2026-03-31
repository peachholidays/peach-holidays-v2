import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Departures from './pages/Departures';
import Dashboard from './pages/Dashboard';
import ComingSoon from './pages/ComingSoon';
import DestinationDetail from './pages/DestinationDetail';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isComingSoon = location.pathname === '/';

  return (
    <>
      {!isComingSoon && <Navbar />}
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/lab/alpha" element={<Home />} />
        <Route path="/lab/tours" element={<Departures />} />
        <Route path="/destinations/:country/:slug" element={<DestinationDetail />} />
        <Route path="/tours" element={<Departures />} />
        <Route path="/insurance" element={<PlaceholderPage title="Travel Insurance" />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
        <Route path="/login" element={<Dashboard />} />
      </Routes>

      {!isComingSoon && (
        <footer style={styles.footer}>
          <div className="container">
            <p>&copy; 2026 Peach Holidays & Events. All Rights Reserved.</p>
          </div>
        </footer>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const PlaceholderPage = ({ title }) => (
  <main style={{ paddingTop: '160px', minHeight: '100vh', textAlign: 'center' }}>
    <div className="container">
      <h1 style={{ fontSize: '4rem', marginBottom: '20px' }} className="gradient-text">{title}</h1>
      <p style={{ color: 'var(--text-secondary)' }}>Module under construction by the Master Agent Team.</p>
    </div>
  </main>
);

const styles = {
  footer: {
    padding: '60px 0',
    borderTop: '1px solid var(--glass-border)',
    textAlign: 'center',
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    background: 'rgba(0,0,0,0.2)',
  }
};

export default App;
