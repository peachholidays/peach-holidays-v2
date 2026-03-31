import React, { useState } from 'react';

/**
 * WebAURA: AdminLogin
 * High-fidelity glassmorphism login gateway for the MD Intelligence Hub.
 */
const AdminLogin = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "GlobalAdmin" && password === "DataMaster@2020") {
            sessionStorage.setItem("md_auth", "true");
            onLogin();
        } else {
            setError("INVALID_CREDENTIALS: ACCESS_DENIED");
        }
    };

    return (
        <main style={styles.main}>
            <div className="glass" style={styles.loginCard}>
                <div style={styles.header}>
                    <div style={styles.badge}>SECURE_GATEWAY_V2</div>
                    <h1 style={styles.h1}>MD <span className="gradient-text">PORTAL</span></h1>
                </div>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>IDENTIFIER</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={styles.input}
                            placeholder="Username"
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>ACCESS_KEY</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            placeholder="••••••••"
                        />
                    </div>

                    {error && <div style={styles.error}>{error}</div>}

                    <button type="submit" style={styles.button}>INITIALIZE_SYNC</button>
                </form>
            </div>
        </main>
    );
};

const styles = {
    main: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, #1a1a1a 0%, #000 100%)',
    },
    loginCard: {
        width: '100%',
        maxWidth: '440px',
        padding: '60px 48px',
        textAlign: 'center',
    },
    header: {
        marginBottom: '40px',
    },
    badge: {
        fontSize: '0.65rem',
        letterSpacing: '0.3em',
        color: 'var(--brand-primary)',
        fontWeight: 700,
        marginBottom: '1rem',
    },
    h1: {
        fontSize: '2.5rem',
        fontWeight: 800,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    },
    inputGroup: {
        textAlign: 'left',
    },
    label: {
        display: 'block',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        color: 'var(--text-dim)',
        marginBottom: '8px',
        fontWeight: 700,
    },
    input: {
        width: '100%',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid var(--brand-glass-border)',
        padding: '16px',
        borderRadius: '12px',
        color: 'white',
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.3s ease',
    },
    error: {
        color: '#ff4b2b',
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.05em',
        background: 'rgba(255,75,43,0.1)',
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid rgba(255,75,43,0.2)',
    },
    button: {
        background: 'var(--brand-primary)',
        color: 'white',
        border: 'none',
        padding: '18px',
        borderRadius: '12px',
        fontWeight: 800,
        fontSize: '0.85rem',
        letterSpacing: '0.1em',
        cursor: 'pointer',
        marginTop: '10px',
    }
};

export default AdminLogin;
