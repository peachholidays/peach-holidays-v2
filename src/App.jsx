import Hero from './components/Hero'
import HorizontalSlider from './components/HorizontalSlider'
import './App.css'

import sapaImg from './assets/destinations/sapa.png'

const UPCOMING_TRIPS = [
  {
    title: 'Sapa Tribal Trek & Homestay',
    category: 'Venture',
    image: sapaImg,
    price: '$850'
  },
  {
    title: 'Hanoi Hidden Gems Tour',
    category: 'Culture',
    image: sapaImg, // Reusing for mock
    price: '$450'
  },
  {
    title: 'Ha Long Bay Luxury Cruise',
    category: 'Relax',
    image: sapaImg, // Reusing for mock
    price: '$1200'
  },
  {
    title: 'Da Nang Coastal Escape',
    category: 'Venture',
    image: sapaImg, // Reusing for mock
    price: '$950'
  }
]

function App() {
  return (
    <main>
      <Hero />

      <HorizontalSlider
        title="Upcoming Trips"
        items={UPCOMING_TRIPS}
      />

      <section className="container" style={styles.featuredSection}>
        <h2 style={styles.heading}>What's Hot this Season?</h2>
        <div className="glass" style={styles.placeholder}>
          <p style={{ color: 'var(--text-secondary)' }}>Curated Seasonal Content coming soon from WebRANK Agent.</p>
        </div>
      </section>

      <footer style={styles.footer}>
        <div className="container">
          <p>&copy; 2026 Peach Holidays & Events. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  )
}

const styles = {
  featuredSection: {
    padding: '100px 2rem',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '40px',
  },
  placeholder: {
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    padding: '40px 0',
    borderTop: '1px solid var(--glass-border)',
    textAlign: 'center',
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
  }
}

export default App
