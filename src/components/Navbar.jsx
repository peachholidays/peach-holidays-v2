import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * WebAURA: Dynamic Sticky Navbar
 * Transitions from a floating glass pill to a thin 90% black sticky bar on scroll.
 */
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 40;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const navStyle = {
        ...styles.nav,
        top: scrolled ? '0' : '24px',
        width: scrolled ? '100%' : '90%',
        maxWidth: scrolled ? 'none' : '1200px',
        borderRadius: scrolled ? '0' : '24px',
        background: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'var(--brand-surface)',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(24px) saturate(180%)',
        padding: scrolled ? '10px 5%' : '14px 32px',
        border: scrolled ? 'none' : '1px solid var(--brand-glass-border)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--brand-glass-border)',
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={styles.container}>
                <Link to="/" style={styles.logo}>
                    PEACH<span style={{ color: 'var(--brand-primary)' }}>.</span>
                </Link>
                <div style={styles.links}>
                    <Link to="/tours" style={styles.link}>Departures</Link>
                    <Link to="/insurance" style={styles.link}>Insurance</Link>
                    <Link to="/insights" style={styles.link}>Insights</Link>
                    <Link to="/dashboard" className="glass" style={styles.loginBtn}>Portal</Link>
                </div>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        maxWidth: '1400px',
    },
    logo: {
        fontSize: '1.4rem',
        fontWeight: 800,
        fontFamily: 'var(--font-heading)',
        textDecoration: 'none',
        color: 'white',
        letterSpacing: '1px',
    },
    links: {
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
    },
    link: {
        textDecoration: 'none',
        color: 'var(--text-dim)',
        fontSize: '0.85rem',
        fontWeight: 500,
        transition: 'color 0.3s ease',
    },
    loginBtn: {
        padding: '10px 24px',
        fontSize: '0.85rem',
        textDecoration: 'none',
        color: 'white',
        borderRadius: '12px',
        fontWeight: 600,
        transition: 'all 0.3s ease',
    }
};

export default Navbar;
