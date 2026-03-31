import React from 'react';
import DestinationCard from '../components/DestinationCard';
import sapaImg from '../assets/destinations/sapa.png';

const MOCK_DEPARTURES = [
    { title: 'Sapa Tribal Trek', category: 'Venture', image: sapaImg, price: '$850' },
    { title: 'Hanoi Street Food', category: 'Culture', image: sapaImg, price: '$450' },
    { title: 'Ha Long Cruise', category: 'Relax', image: sapaImg, price: '$1200' },
    { title: 'Da Nang Coastal', category: 'Venture', image: sapaImg, price: '$950' },
    { title: 'Phu Quoc Sunset', category: 'Relax', image: sapaImg, price: '$750' },
    { title: 'MeKong River Delta', category: 'Culture', image: sapaImg, price: '$550' },
];

const Departures = () => {
    return (
        <main style={{ paddingTop: '140px', minHeight: '100vh' }}>
            <div className="container">
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Fixed <span className="gradient-text">Departures</span></h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '600px' }}>
                    Book your spot on our upcoming curated group tours. All-inclusive, elite experiences designed for authentic connection.
                </p>

                <div style={styles.grid}>
                    {MOCK_DEPARTURES.map((item, index) => (
                        <DestinationCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </main>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '32px',
        paddingBottom: '100px',
    }
};

export default Departures;
