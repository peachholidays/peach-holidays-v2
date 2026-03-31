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
                    <div style={styles.meta}>
                        <span style={styles.price}>from {price}</span>
                        <div style={styles.inventory}>8 Spots Left</div>
                    </div>
                    <button style={styles.button}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    card: {
        width: '360px',
        flexShrink: 0,
        overflow: 'hidden',
        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
        padding: '16px',
        borderRadius: 'var(--radius-outer)',
    },
    image: {
        height: '260px',
        borderRadius: 'var(--radius-inner)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: '16px',
        left: '16px',
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(10px)',
        padding: '6px 14px',
        borderRadius: '20px',
        fontSize: '0.7rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        border: '1px solid var(--brand-glass-border)',
        color: 'var(--brand-primary)',
    },
    content: {
        padding: '24px 8px 8px',
    },
    title: {
        fontSize: '1.4rem',
        marginBottom: '1.25rem',
        color: 'white',
        fontWeight: 600,
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    meta: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    price: {
        fontSize: '1rem',
        fontWeight: 700,
        color: 'white',
    },
    inventory: {
        fontSize: '0.75rem',
        color: 'var(--brand-primary)',
        fontWeight: 600,
    },
    button: {
        background: 'transparent',
        border: '1px solid var(--brand-glass-border)',
        color: 'white',
        padding: '10px 24px',
        borderRadius: '12px',
        fontSize: '0.85rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    }
};

export default DestinationCard;
