import React from 'react';
import Hero from '../components/Hero';
import HorizontalSlider from '../components/HorizontalSlider';
import sapaImg from '../assets/destinations/sapa.png';

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
        image: sapaImg,
        price: '$450'
    },
    {
        title: 'Ha Long Bay Luxury Cruise',
        category: 'Relax',
        image: sapaImg,
        price: '$1200'
    }
];

const Home = () => {
    return (
        <main>
            <Hero />
            <HorizontalSlider title="Upcoming Trips" items={UPCOMING_TRIPS} />
            <section className="container" style={{ padding: '100px 2rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>What's Hot this Season?</h2>
                <div className="glass" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: 'var(--text-secondary)' }}>Curated Seasonal Content coming soon from WebRANK Agent.</p>
                </div>
            </section>
        </main>
    );
};

export default Home;
