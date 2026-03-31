import React from 'react';

/**
 * WebAURA: Demographic Safety Widget
 * A high-fidelity glassmorphism card displaying safety indices for Solo Female & LGBTQ+ travelers.
 */
const DemographicSafetyWidget = ({ soloFemaleScore = 85, lgbtqScore = 90 }) => {
    return (
        <div className="glass" style={styles.widget}>
            <div style={styles.header}>
                <h4 style={styles.title}>DEMOGRAPHIC_SAFETY_INDEX</h4>
                <div style={styles.pulse}></div>
            </div>

            <div style={styles.metrics}>
                <div style={styles.metric}>
                    <div style={styles.label}>
                        <span>Solo Female Safety</span>
                        <span style={styles.score}>{soloFemaleScore}/100</span>
                    </div>
                    <div style={styles.track}>
                        <div style={{ ...styles.fill, width: `${soloFemaleScore}%`, background: 'var(--brand-primary)' }}></div>
                    </div>
                    <p style={styles.note}>Digital connectivity & safe-transport verified.</p>
                </div>

                <div style={styles.metric}>
                    <div style={styles.label}>
                        <span>LGBTQ+ Friendliness</span>
                        <span style={styles.score}>{lgbtqScore}/100</span>
                    </div>
                    <div style={styles.track}>
                        <div style={{ ...styles.fill, width: `${lgbtqScore}%`, background: 'var(--brand-accent)' }}></div>
                    </div>
                    <p style={styles.note}>Based on Equaldex & local verified venues.</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    widget: {
        padding: '32px',
        marginBottom: '60px',
        border: '1px solid var(--brand-glass-border)',
        position: 'relative',
        overflow: 'hidden',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
    },
    title: {
        fontSize: '0.8rem',
        letterSpacing: '0.2em',
        color: 'var(--brand-primary)',
        fontWeight: 700,
    },
    pulse: {
        width: '8px',
        height: '8px',
        background: '#4CAF50',
        borderRadius: '50%',
        boxShadow: '0 0 10px #4CAF50',
    },
    metrics: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
    },
    label: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '12px',
        fontSize: '0.9rem',
        fontWeight: 600,
    },
    score: {
        fontFamily: 'monospace',
    },
    track: {
        height: '4px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '2px',
        marginBottom: '12px',
    },
    fill: {
        height: '100%',
        borderRadius: '2px',
        boxShadow: '0 0 15px rgba(255,255,255,0.2)',
    },
    note: {
        fontSize: '0.75rem',
        color: 'var(--text-dim)',
        lineHeight: 1.4,
    }
};

export default DemographicSafetyWidget;
