import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const searchRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.5 } });

        tl.fromTo(titleRef.current, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, delay: 0.5 }
        )
        .fromTo(subRef.current, 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1 }, 
            "-=1"
        )
        .fromTo(searchRef.current, 
            { scale: 0.9, opacity: 0 }, 
            { scale: 1, opacity: 1 }, 
            "-=0.8"
        );
    }, []);

    return (
        <section ref={heroRef} style={styles.hero}>
            <div className="container" style={styles.container}>
                <h1 ref={titleRef} style={styles.title}>
                    Unfold Your <span className="gradient-text">DNA</span> of Travel
                </h1>
                <p ref={subRef} style={styles.subtitle}>
                    Award-winning experiences curated for the next generation of explorers.
                </p>
                
                <div ref={searchRef} className="glass" style={styles.searchBar}>
                    <input 
                        type="text" 
                        placeholder="Where is your energy taking you?" 
                        style={styles.input}
                    />
                    <button style={styles.button}>Search</button>
                </div>
            </div>
            
            {/* Background Accent */}
            <div style={styles.glow}></div>
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
    container: {
        textAlign: 'center',
        zIndex: 10,
    },
    title: {
        fontSize: 'clamp(3rem, 8vw, 6rem)',
        lineHeight: 1.1,
        marginBottom: '1.5rem',
        fontWeight: 800,
    },
    subtitle: {
        fontSize: '1.25rem',
        color: 'var(--text-secondary)',
        marginBottom: '3rem',
        maxWidth: '600px',
        marginInline: 'auto',
    },
    searchBar: {
        display: 'flex',
        padding: '0.75rem',
        maxWidth: '800px',
        margin: '0 auto',
        gap: '0.5rem',
    },
    input: {
        flex: 1,
        background: 'transparent',
        border: 'none',
        padding: '1rem 1.5rem',
        color: 'white',
        fontSize: '1.1rem',
        fontFamily: 'var(--font-body)',
        outline: 'none',
    },
    button: {
        background: 'var(--peach)',
        color: 'white',
        border: 'none',
        padding: '1rem 2.5rem',
        borderRadius: '16px',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
    },
    glow: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(255, 140, 75, 0.15) 0%, rgba(10, 10, 12, 0) 70%)',
        zIndex: 0,
        pointerEvents: 'none',
    }
};

export default Hero;
