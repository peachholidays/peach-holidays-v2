import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const searchRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

        tl.fromTo(titleRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, delay: 0.5 }
        )
            .fromTo(subRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1 },
                "-=0.8"
            )
            .fromTo(searchRef.current,
                { scale: 0.95, opacity: 0, filter: 'blur(10px)' },
                { scale: 1, opacity: 1, filter: 'blur(0px)' },
                "-=0.6"
            );
    }, []);

    return (
        <section ref={heroRef} style={styles.hero}>
            {/* Background Visual Strategy: Placeholder for Video Loop */}
            <div style={styles.videoPlaceholder}></div>

            <div className="container" style={styles.container}>
                {/* GAIEO Mapping: H1 Header */}
                <h1 ref={titleRef} style={styles.title}>
                    Award-Winning Travel & Events<br />
                    <span className="gradient-text">Peach Holidays</span>
                </h1>

                {/* WebRANK: (formerly OneLife Travel) mention integrated for authority bridge */}
                <p ref={subRef} style={styles.subtitle}>
                    Formerly OneLife Travel. Curating high-fidelity experiences for the next generation of global explorers.
                </p>

                {/* Mega-Search Bar Overlay */}
                <div ref={searchRef} className="glass" style={styles.searchBar}>
                    <div style={styles.searchGroup}>
                        <label style={styles.label}>Destination</label>
                        <input type="text" placeholder="Where next?" style={styles.input} />
                    </div>
                    <div style={{ ...styles.searchGroup, borderLeft: '1px solid var(--brand-glass-border)' }}>
                        <label style={styles.label}>Vibe / Energy</label>
                        <input type="text" placeholder="Adrenaline, Relax..." style={styles.input} />
                    </div>
                    <button style={styles.button}>Discover</button>
                </div>
            </div>
        </section>
    );
};

const styles = {
    hero: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    videoPlaceholder: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(10,10,12,0.1) 0%, var(--brand-bg) 100%)',
        zIndex: -1,
    },
    container: {
        textAlign: 'center',
        zIndex: 10,
    },
    title: {
        fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
        lineHeight: 1.05,
        marginBottom: '1.5rem',
        fontWeight: 700,
    },
    subtitle: {
        fontSize: '1.15rem',
        color: 'var(--text-dim)',
        marginBottom: '4rem',
        maxWidth: '700px',
        marginInline: 'auto',
        fontWeight: 400,
    },
    searchBar: {
        display: 'flex',
        padding: '12px',
        maxWidth: '900px',
        margin: '0 auto',
        gap: '8px',
        borderRadius: '24px',
    },
    searchGroup: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0 24px',
    },
    label: {
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--brand-primary)',
        fontWeight: 700,
        marginBottom: '4px',
    },
    input: {
        background: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '1rem',
        fontFamily: 'var(--font-body)',
        outline: 'none',
        width: '100%',
    },
    button: {
        background: 'var(--brand-primary)',
        color: 'white',
        border: 'none',
        padding: '0 40px',
        borderRadius: '16px',
        fontSize: '1rem',
        fontWeight: 700,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    }
};

export default Hero;
