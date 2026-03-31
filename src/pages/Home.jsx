import React from 'react';
import Hero from '../components/Hero';
import HorizontalSlider from '../components/HorizontalSlider';
import sapaImg from '../assets/destinations/sapa.png';

const UPCOMING_TRIPS = [
    { title: 'Sapa Tribal Trek & Homestay', category: 'Venture', image: sapaImg, price: '$850' },
    { title: 'Hanoi Hidden Gems Tour', category: 'Culture', image: sapaImg, price: '$450' },
    { title: 'Ha Long Bay Luxury Cruise', category: 'Relax', image: sapaImg, price: '$1200' }
];

const Home = () => {
    return (
        <main>
            <Hero />

            {/* Section 2: Upcoming Trips */}
            <HorizontalSlider title="Explore Upcoming Fixed Departures & Group Tours" items={UPCOMING_TRIPS} />

            {/* Section 3: What's Hot (Forecast) */}
            <HorizontalSlider title="Travel Energy Forecast: What’s Hot this Season?" items={UPCOMING_TRIPS} />

            {/* Section 4: Static Services */}
            <section className="section-padding container">
                <h2 style={styles.sectionTitle}>Curated Service Ecosystem</h2>
                <div style={styles.grid}>
                    <div className="glass" style={styles.card}>
                        <h3 style={styles.h3}>Integrated Travel Insurance</h3>
                        <p style={styles.p}>Frictionless protection for every booking, backed by global standard providers.</p>
                    </div>
                    <div className="glass" style={styles.card}>
                        <h3 style={styles.h3}>Elite Curation</h3>
                        <p style={styles.p}>Hand-picked destinations that mirror your personal Energy DNA.</p>
                    </div>
                    <div className="glass" style={styles.card}>
                        <h3 style={styles.h3}>Custom Tour Planning</h3>
                        <p style={styles.p}>Bespoke itineraries for private groups and corporate retreats.</p>
                    </div>
                </div>
            </section>

            {/* Section 5: Conversion Anchor */}
            <section style={styles.ctaSection}>
                <div className="container glass" style={styles.ctaContainer}>
                    <h2 style={{ ...styles.sectionTitle, marginBottom: '1rem' }}>Stay in the Energy Flow.</h2>
                    <p style={{ ...styles.p, marginBottom: '32px' }}>Subscribe to the Peach Insights newsletter for exclusive fixed-departure access.</p>
                    <div style={styles.newsletter}>
                        <input type="email" placeholder="explorer@peach.com" style={styles.emailInput} />
                        <button style={styles.button}>Subscribe</button>
                    </div>
                </div>
            </section>

            {/* Conversion: Sticky CTA */}
            <button style={styles.stickyCta}>Book Your Energy</button>
        </main>
    );
};

const styles = {
    sectionTitle: {
        fontSize: '3rem',
        marginBottom: '60px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '32px',
    },
    card: {
        padding: '40px',
    },
    h3: {
        fontSize: '1.5rem',
        marginBottom: '16px',
        color: 'var(--brand-primary)',
    },
    p: {
        color: 'var(--text-dim)',
    },
    ctaSection: {
        padding: '0 0 120px 0',
    },
    ctaContainer: {
        padding: '80px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,140,75,0.1) 100%)',
    },
    newsletter: {
        display: 'flex',
        gap: '16px',
        maxWidth: '500px',
        margin: '0 auto',
    },
    emailInput: {
        flex: 1,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid var(--brand-glass-border)',
        borderRadius: '12px',
        padding: '12px 20px',
        color: 'white',
        fontSize: '1rem',
        outline: 'none',
    },
    button: {
        background: 'var(--brand-primary)',
        color: 'white',
        border: 'none',
        padding: '12px 32px',
        borderRadius: '12px',
        fontWeight: 700,
        cursor: 'pointer',
    },
    stickyCta: {
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        background: 'var(--brand-primary)',
        color: 'white',
        border: 'none',
        padding: '16px 32px',
        borderRadius: '32px',
        fontWeight: 700,
        fontSize: '1rem',
        boxShadow: '0 12px 40px rgba(255, 140, 75, 0.4)',
        cursor: 'pointer',
        zIndex: 2000,
    }
};

export default Home;
