import React from 'react';

const DestinationCard = ({ title, category, image, price }) => {
    return (
        <div className="glass" style={styles.card}>
            <div style={{ ...styles.image, backgroundImage: `url(${image})` }}>
                <div style={styles.badge}>{category}</div>
            </div>
            <div style={styles.content}>
                <h3 style={styles.title}>{title}</h3>
                <div style={styles.footer}>
                    <span style={styles.price}>from {price}</span>
                    <button style={styles.button}>Explore</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    card: {
        width: '320px',
        flexShrink: 0,
        overflow: 'hidden',
        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
        padding: '12px',
    },
    image: {
        height: '240px',
        borderRadius: '16px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: '12px',
        left: '12px',
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(10px)',
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        border: '1px solid rgba(255,255,255,0.1)',
    },
    content: {
        padding: '16px 8px 8px',
    },
    title: {
        fontSize: '1.25rem',
        marginBottom: '1rem',
        color: 'white',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
    },
    button: {
        background: 'transparent',
        border: '1px solid var(--glass-border)',
        color: 'white',
        padding: '6px 16px',
        borderRadius: '12px',
        fontSize: '0.8rem',
        cursor: 'pointer',
    }
};

export default DestinationCard;
