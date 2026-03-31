import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import DestinationCard from '../components/DestinationCard';
import sapaImg from '../assets/destinations/sapa.png'; // Fallback

const Departures = () => {
    const [departures, setDepartures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDepartures = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "fixed_departures"));
                const liveData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setDepartures(liveData);
            } catch (error) {
                console.error("WebLOGIC: Error fetching departures:", error);
            }
            setLoading(false);
        };
        fetchDepartures();
    }, []);

    return (
        <main style={{ paddingTop: '140px', minHeight: '100vh' }}>
            <div className="container">
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Fixed <span className="gradient-text">Departures</span></h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '600px' }}>
                    Book your spot on our upcoming curated group tours. All-inclusive, elite experiences designed for authentic connection.
                </p>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--brand-primary)' }}>
                        Calibrating Elite Routes...
                    </div>
                ) : (
                    <div style={styles.grid}>
                        {departures.map((item) => (
                            <DestinationCard
                                key={item.id}
                                title={item.title}
                                category="Venture"
                                image={sapaImg} // Logic for dynamic image loading next
                                price={`${item.pricing?.currency || 'INR'} ${item.pricing?.amount || item.price}`}
                            />
                        ))}
                    </div>
                )}
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
