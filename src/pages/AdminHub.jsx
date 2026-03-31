import React, { useState } from 'react';
import { seedLadakhData, seedInsightsData } from '../firebase/seedData';
import { seedJapanCluster } from '../firebase/seedJapan';
import AdminLogin from './AdminLogin';

/**
 * WebLOGIC: AdminHub
 * A dedicated, high-fidelity administrative terminal for MD Intelligence Tools.
 */
const AdminHub = () => {
    const [seeding, setSeeding] = useState(false);
    const [seedingInsights, setSeedingInsights] = useState(false);
    const [seedingJapan, setSeedingJapan] = useState(false);
    const [success, setSuccess] = useState(false);
    const [successInsights, setSuccessInsights] = useState(false);
    const [successJapan, setSuccessJapan] = useState(false);
    const [error, setError] = useState("");
    const [authenticated, setAuthenticated] = useState(sessionStorage.getItem("md_auth") === "true");

    if (!authenticated) {
        return <AdminLogin onLogin={() => setAuthenticated(true)} />;
    }

    const handleSeed = async () => {
        setSeeding(true);
        setError("");
        const result = await seedLadakhData();
        setSuccess(result.success);
        if (result.error) setError(result.error);
        setSeeding(false);
    };

    const handleSeedInsights = async () => {
        setSeedingInsights(true);
        setError("");
        const result = await seedInsightsData();
        setSuccessInsights(result.success);
        if (result.error) setError(result.error);
        setSeedingInsights(false);
    };

    const handleSeedJapan = async () => {
        setSeedingJapan(true);
        setError("");
        const result = await seedJapanCluster();
        setSuccessJapan(result.success);
        if (result.error) setError(result.error);
        setSeedingJapan(false);
    };

    return (
        <main style={{ paddingTop: '140px', minHeight: '100vh', background: 'radial-gradient(circle at top, #111, #000)' }}>
            <div className="container">
                <header style={{ marginBottom: '60px' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--brand-primary)', letterSpacing: '0.3em', fontWeight: 700, marginBottom: '1rem' }}>
                        ADMIN_TERMINAL_V2_SECURE
                    </div>
                    <h1 style={{ fontSize: '3.5rem' }}>MD <span className="gradient-text">INTELLIGENCE</span></h1>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Centralized control plane for Phae Holiday data injection and GAIEO maintenance.</p>
                </header>

                <div style={styles.grid}>
                    <div className="glass" style={styles.card}>
                        <h3 style={{ color: 'var(--brand-primary)', marginBottom: '1rem' }}>FLIGHT_DATA_INJECTION</h3>
                        <p style={styles.body}>Deploy exhaustive Ladakh Dreams 2026 tour data including routes, pricing, and visual IDs.</p>
                        <button
                            onClick={handleSeed}
                            disabled={seeding}
                            style={{ ...styles.btn, background: success ? '#4CAF50' : 'var(--brand-primary)' }}
                        >
                            {seeding ? "DEPLOYING_TOUR..." : success ? "DEPLOY_SUCCESS" : "RUN_LADAKH_SEED"}
                        </button>
                    </div>

                    <div className="glass" style={styles.card}>
                        <h3 style={{ color: 'var(--peach)', marginBottom: '1rem' }}>GAIEO_LEGACY_SCAN</h3>
                        <p style={styles.body}>Generate and seed the initial AI Insights articles for Vietnam and Ladakh authority.</p>
                        <button
                            onClick={handleSeedInsights}
                            disabled={seedingInsights}
                            style={{ ...styles.btn, background: successInsights ? '#4CAF50' : 'var(--peach)', color: 'black' }}
                        >
                            {seedingInsights ? "SCANNING_KB..." : successInsights ? "SCAN_SUCCESS" : "RUN_GAIEO_SEED"}
                        </button>
                    </div>

                    <div className="glass" style={{ ...styles.card, gridColumn: 'span 2' }}>
                        <h3 style={{ color: 'var(--brand-accent)', marginBottom: '1rem' }}>CLUSTER_RANCH_PERSISTENCE (JAPAN)</h3>
                        <p style={styles.body}>Plant the hierarchical Japan content cluster including Hub/Spoke taxonomy and Safety Widgets.</p>
                        <button
                            onClick={handleSeedJapan}
                            disabled={seedingJapan}
                            style={{ ...styles.btn, background: successJapan ? '#4CAF50' : 'var(--brand-accent)', color: 'black' }}
                        >
                            {seedingJapan ? "PLANTING_RANCH..." : successJapan ? "RANCH_LIVE" : "DEPLOY_JAPAN_CLUSTER"}
                        </button>
                    </div>

                    {error && (
                        <div style={{ gridColumn: 'span 2', padding: '20px', background: 'rgba(255,0,0,0.1)', border: '1px solid #ff4b2b', borderRadius: '12px', color: '#ff4b2b', fontSize: '0.8rem' }}>
                            <strong>INTELLIGENCE_FAILURE:</strong> {error}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        paddingBottom: '100px',
    },
    card: {
        padding: '32px',
    },
    body: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        lineHeight: 1.6,
        marginBottom: '24px',
    },
    btn: {
        border: 'none',
        padding: '12px 32px',
        borderRadius: '12px',
        fontWeight: 700,
        cursor: 'pointer',
        fontSize: '0.8rem',
        width: '100%',
    }
};

export default AdminHub;
