import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ComingSoon = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const subRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 2 } });

        tl.fromTo(containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 3 }
        )
            .fromTo(textRef.current,
                { y: 100, opacity: 0, filter: 'blur(20px)' },
                { y: 0, opacity: 1, filter: 'blur(0px)' },
                "-=2"
            )
            .fromTo(subRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1 },
                "-=1.5"
            )
            .fromTo(footerRef.current,
                { opacity: 0 },
                { opacity: 1 },
                "-=1"
            );

        // Subtle background animation
        gsap.to(".nebula", {
            scale: 1.2,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    return (
        <main ref={containerRef} style={styles.main}>
            <div className="nebula" style={styles.nebula}></div>

            <div className="container" style={styles.content}>
                <div style={styles.badge}>RE-SEQUENCING_TRAVEL</div>
                <h1 ref={textRef} style={styles.title}>
                    THE <span className="gradient-text">DNA</span> OF TRAVEL<br />
                    IS BEING RE-SEQUENCED.
                </h1>
                <p ref={subRef} style={styles.subtitle}>
                    Silence is the new luxury. Peach Holidays is calibrating your next high-fidelity escape. <br />
                    The future of discovery is currently under calibration.
                </p>

                <div className="glass" style={styles.formContainer}>
                    <input type="email" placeholder="JOIN_THE_FLOW@PEACH.COM" style={styles.input} />
                    <button style={styles.button}>RE-TUNE SOON</button>
                </div>
            </div>

            <footer ref={footerRef} style={styles.footer}>
                <div className="container" style={styles.footerInner}>
                    <span>EST. 2026</span>
                    <div style={styles.dot}></div>
                    <span>FORMERLY ONELIFE TRAVEL</span>
                    <div style={styles.dot}></div>
                    <span>PEACH-HOLIDAYS.COM</span>
                </div>
            </footer>
        </main>
    );
};

const styles = {
    main: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0c',
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        textAlign: 'center',
    },
    nebula: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        height: '100vw',
        background: 'radial-gradient(circle, rgba(255, 140, 75, 0.08) 0%, rgba(179, 102, 255, 0.05) 30%, rgba(10, 10, 12, 0) 70%)',
        zIndex: 0,
        pointerEvents: 'none',
    },
    content: {
        zIndex: 10,
        position: 'relative',
        padding: '0 2rem',
    },
    badge: {
        fontSize: '0.75rem',
        letterSpacing: '0.3em',
        color: 'var(--brand-primary)',
        marginBottom: '2rem',
        fontWeight: 700,
    },
    title: {
        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
        lineHeight: 1.1,
        letterSpacing: '-0.04em',
        fontWeight: 800,
        marginBottom: '2rem',
        fontFamily: 'var(--font-heading)',
    },
    subtitle: {
        fontSize: '1.2rem',
        color: 'rgba(255,255,255,0.6)',
        maxWidth: '800px',
        margin: '0 auto 4rem',
        lineHeight: 1.8,
    },
    formContainer: {
        display: 'flex',
        maxWidth: '500px',
        margin: '0 auto',
        padding: '8px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        gap: '8px',
    },
    input: {
        flex: 1,
        background: 'transparent',
        border: 'none',
        padding: '12px 20px',
        color: 'white',
        fontSize: '0.9rem',
        fontWeight: 600,
        outline: 'none',
        letterSpacing: '0.1em',
    },
    button: {
        background: 'var(--brand-primary)',
        color: '#000',
        border: 'none',
        padding: '12px 32px',
        borderRadius: '12px',
        fontSize: '0.9rem',
        fontWeight: 800,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    footer: {
        position: 'absolute',
        bottom: '40px',
        width: '100%',
        color: 'rgba(255,255,255,0.3)',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        fontWeight: 600,
    },
    footerInner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    },
    dot: {
        width: '4px',
        height: '4px',
        background: 'rgba(255,255,255,0.2)',
        borderRadius: '50%',
    }
};

export default ComingSoon;
