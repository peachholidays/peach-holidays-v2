import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Departures from './pages/Departures';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Departures />} />
        <Route path="/insurance" element={<PlaceholderPage title="Travel Insurance" />} />
        <Route path="/insights" element={<PlaceholderPage title="Travel Insights" />} />
        <Route path="/login" element={<PlaceholderPage title="User Authentication" />} />
      </Routes>

      <footer style={styles.footer}>
        <div className="container">
          <p>&copy; 2026 Peach Holidays & Events. All Rights Reserved.</p>
        </div>
      </footer>
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
