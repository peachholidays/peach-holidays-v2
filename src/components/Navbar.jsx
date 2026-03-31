import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="glass" style={styles.nav}>
            <div className="container" style={styles.container}>
                <Link to="/" style={styles.logo}>
                    PEACH<span style={{ color: 'var(--peach)' }}>.</span>
                </Link>
                <div style={styles.links}>
                    <Link to="/tours" style={styles.link}>Departures</Link>
                    <Link to="/insurance" style={styles.link}>Insurance</Link>
                    <Link to="/insights" style={styles.link}>Insights</Link>
                    <Link to="/login" className="glass" style={styles.loginBtn}>Login</Link>
                </div>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 1000,
        padding: '12px 24px',
        border: '1px solid var(--glass-border)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 800,
        fontFamily: 'var(--font-heading)',
        textDecoration: 'none',
        color: 'white',
        letterSpacing: '1px',
    },
    links: {
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
    },
    link: {
        textDecoration: 'none',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        fontWeight: 500,
        transition: 'color 0.3s ease',
    },
    loginBtn: {
        padding: '8px 20px',
        fontSize: '0.9rem',
        textDecoration: 'none',
        color: 'white',
        border: '1px solid var(--glass-border)',
    }
};

export default Navbar;
