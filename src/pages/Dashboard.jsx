import React from 'react';

const Dashboard = () => {
    return (
        <main style={{ paddingTop: '140px', minHeight: '100vh' }}>
            <div className="container">
                <header style={styles.header}>
                    <div>
                        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Welcome, <span className="gradient-text">Explorer</span></h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Level 1 (Free) Account | 2,400 Energy Points</p>
                    </div>
                    <div className="glass" style={styles.avatar}>
                        JP
                    </div>
                </header>

                <div style={styles.grid}>
                    <div className="glass" style={styles.card}>
                        <h3>Upcoming Itineraries</h3>
                        <p style={styles.cardBody}>You have no active bookings. Explore our [Fixed Departures](/tours) to start your journey.</p>
                    </div>

                    <div className="glass" style={styles.card}>
                        <h3>Your Energy DNA</h3>
                        <div style={styles.dnaChart}>
                            <div style={{ ...styles.bar, width: '80%', background: 'var(--peach)' }}>Adrenaline (80%)</div>
                            <div style={{ ...styles.bar, width: '40%', background: 'var(--neon-pink)' }}>Serenity (40%)</div>
                            <div style={{ ...styles.bar, width: '60%', background: 'var(--electric-indigo)' }}>Culture (60%)</div>
                        </div>
                    </div>

                    <div className="glass" style={{ ...styles.card, gridColumn: 'span 2' }}>
                        <h3>Recent Insights</h3>
                        <p style={styles.cardBody}>Top recommendations based on your profile.</p>
                        <div style={styles.insightsList}>
                            <div style={styles.insightItem}>Vietnam: The Sapa Trek Guide</div>
                            <div style={styles.insightItem}>Bali: Beyond the Tourist Path</div>
                            <div style={styles.insightItem}>Tokyo: Cyberpunk Nightlife</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '60px',
    },
    avatar: {
        width: '64px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.25rem',
        fontWeight: 'bold',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
    },
    card: {
        padding: '32px',
    },
    cardBody: {
        marginTop: '20px',
        color: 'var(--text-secondary)',
    },
    dnaChart: {
        marginTop: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    bar: {
        padding: '8px 16px',
        borderRadius: '12px',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        color: 'black',
    },
    insightsList: {
        marginTop: '20px',
        display: 'flex',
        gap: '12px',
    },
    insightItem: {
        padding: '12px 20px',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '12px',
        fontSize: '0.9rem',
        border: '1px solid var(--glass-border)',
    }
};

export default Dashboard;
