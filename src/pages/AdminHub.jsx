import React, { useState, useEffect } from 'react';
import { seedLadakhData, seedInsightsData } from '../firebase/seedData';
import { seedJapanCluster } from '../firebase/seedJapan';

/**
 * WebLOGIC: AdminHub v3 (Safe-Inline Version)
 * Consolidating login logic to eliminate import/pathing failures.
 */
const AdminHub = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [seeding, setSeeding] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    // Check session on mount
    useEffect(() => {
        if (sessionStorage.getItem("md_auth") === "true") {
            setAuthenticated(true);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "GlobalAdmin" && password === "DataMaster@2020") {
            sessionStorage.setItem("md_auth", "true");
            setAuthenticated(true);
        } else {
            setError("AUTH_FAILURE: INVALID_KEY");
        }
    };

    const runSeed = async (seedFn, label) => {
        setSeeding(true);
        setError("");
        const result = await seedFn();
        if (result.success) setSuccess(true);
        else setError(`${label}_ERROR: ${result.error}`);
        setSeeding(false);
    };

    // --- RENDER LOGIN ---
    if (!authenticated) {
        return (
            <main style={styles.loginMain}>
                <div className="glass" style={styles.loginCard}>
                    <div style={{ marginBottom: '40px' }}>
                        <div style={styles.badge}>MD_SECURE_ACCESS_V3</div>
                        <h1 style={{ fontSize: '2.5rem' }}>PHAE <span className="gradient-text">ADMIN</span></h1>
                    </div>
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <input
                            type="text"
                            placeholder="Identifier"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            style={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="AccessKey"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            style={styles.input}
                        />
                        {error && <div style={{ color: '#ff4b2b', fontSize: '0.8rem' }}>{error}</div>}
                        <button type="submit" style={styles.btnPrimary}>INITIALIZE_SYNC</button>
                    </form>
                </div>
            </main>
        );
    }

    // --- RENDER DASHBOARD ---
    return (
        <main style={styles.main}>
            <div className="container">
                <header style={{ marginBottom: '60px' }}>
                    <div style={styles.badge}>MD_INTELLIGENCE_TERMINAL</div>
                    <h1 style={{ fontSize: '3.5rem' }}>SYSTEM <span className="gradient-text">CONTROL</span></h1>
                </header>

                <div style={styles.grid}>
                    <div className="glass" style={styles.card}>
                        <h3>LADAKH_DREAMS_2026</h3>
                        <p style={styles.cardInfo}>Deploy fixed departure data for Ladakh tour injection.</p>
                        <button onClick={() => runSeed(seedLadakhData, "LADAKH")} style={styles.btn}>RUN_LADAKH_SEED</button>
                    </div>

                    <div className="glass" style={styles.card}>
                        <h3>INSIGHTS_LEGACY</h3>
                        <p style={styles.cardInfo}>Seed initial GAIEO articles for Sapa and Ladakh.</p>
                        <button onClick={() => runSeed(seedInsightsData, "INSIGHTS")} style={styles.btn}>RUN_GAIEO_SEED</button>
                    </div>

                    <div className="glass" style={{ ...styles.card, gridColumn: 'span 2' }}>
                        <h3>JAPAN_CLUSTER_RANCH_V1</h3>
                        <p style={styles.cardInfo}>Deploy hierarchical Hub-and-Spoke cluster + Safety Widgets.</p>
                        <button onClick={() => runSeed(seedJapanCluster, "JAPAN")} style={styles.btnSecondary}>DEPLOY_JAPAN_CLUSTER</button>
                    </div>
                </div>

                {seeding && <div style={styles.overlay}>EXECUTING_DATA_STRATEGY...</div>}
                {success && <div style={{ marginTop: '20px', color: '#4CAF50' }}>SUCCESS: CLUSTER_STABLE</div>}
                {error && <div style={{ marginTop: '20px', color: '#ff4b2b' }}>{error}</div>}
            </div>
        </main>
    );
};

const styles = {
    loginMain: { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' },
    loginCard: { width: '400px', padding: '60px 40px', textAlign: 'center' },
    main: { paddingTop: '160px', minHeight: '100vh', background: 'radial-gradient(circle at top, #111, #000)' },
    badge: { fontSize: '0.7rem', color: 'var(--brand-primary)', letterSpacing: '0.3em', fontWeight: 700, marginBottom: '1rem' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' },
    card: { padding: '32px' },
    cardInfo: { color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '24px', marginTop: '10px' },
    input: { width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--brand-glass-border)', borderRadius: '8px', color: 'white' },
    btnPrimary: { background: 'var(--brand-primary)', color: 'white', border: 'none', padding: '16px', borderRadius: '8px', fontWeight: 800, cursor: 'pointer' },
    btn: { background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid var(--brand-glass-border)', padding: '12px', borderRadius: '8px', width: '100%', cursor: 'pointer' },
    btnSecondary: { background: 'var(--brand-accent)', color: 'black', border: 'none', padding: '14px', borderRadius: '8px', width: '100%', fontWeight: 700, cursor: 'pointer' },
    overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)', zIndex: 2000 }
};

export default AdminHub;
