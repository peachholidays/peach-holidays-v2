import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Manual SVG Icons for Build Stability
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const YoutubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" /><path d="m10 15 5-3-5-3z" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;

const ComingSoon = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const subRef = useRef(null);
    const socialRef = useRef(null);
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
            .fromTo(socialRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.2 },
                "-=1"
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

    const socialLinks = [
        { icon: <InstagramIcon />, url: 'https://www.instagram.com/peach.holidays.and.events/' },
        { icon: <FacebookIcon />, url: 'https://www.facebook.com/peach.holidays.and.events' },
        { icon: <YoutubeIcon />, url: 'https://www.facebook.com/peach.holidays.and.events' }, // Following user's provided link
        { icon: <MailIcon />, url: 'mailto:peachholidays.ae@gmail.com' },
    ];

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

                {/* Social Connectivity */}
                <div ref={socialRef} style={styles.socialGrid}>
                    {socialLinks.map((link, idx) => (
                        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="glass" style={styles.socialIcon}>
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>

            <footer ref={footerRef} style={styles.footer}>
                <div className="container" style={styles.footerInner}>
                    <span>EST. 2020</span>
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
        margin: '0 auto 3rem',
        lineHeight: 1.8,
    },
    formContainer: {
        display: 'flex',
        maxWidth: '500px',
        margin: '0 auto 3rem',
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
    socialGrid: {
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
    },
    socialIcon: {
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        color: 'white',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
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
