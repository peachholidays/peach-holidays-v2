import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import heroImg from '../assets/destinations/sapa.png'; // Fallback

const DestinationDetail = () => {
    const { country, slug } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDestination = async () => {
            const docRef = doc(db, "destinations", slug);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setData(docSnap.data());
            }
            setLoading(false);
        };
        fetchDestination();
    }, [slug]);

    if (loading) return <div style={styles.loading}>Calibrating Intelligence...</div>;

    // Mapping WebRANK Directive for Ladakh specifically as a pilot
    const isLadakh = slug === 'ladakh';

    return (
        <main style={styles.main}>
            {/* GAIEO Mapping: Header & Hero */}
            <section style={styles.hero}>
                <div className="container">
                    <div style={styles.badge}>{data?.tagline || "High-Fidelity Discovery"}</div>
                    <h1 style={styles.h1}>
                        {isLadakh ? "The Ultimate Ladakh Dreams Tour 2026: 8 Days in the High-Altitude Desert" : data?.name}
                    </h1>

                    {isLadakh && (
                        <div className="glass" style={styles.answerBox}>
                            <p style={styles.p}>
                                <strong>Answer-First:</strong> The Ladakh Dreams 2026 tour is an 8-day, 7-night fixed departure journey covering Leh, Nubra Valley, and Pangong Tso. Pricing starts at ₹36,490 per adult on a twin-sharing basis, which includes 5% GST, accommodation, daily breakfast and dinner, and all necessary inner-line permits.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <section className="section-padding container">
                <div style={styles.contentGrid}>
                    <div style={styles.textContent}>
                        <h2 style={styles.h2}>
                            {isLadakh ? "What is the itinerary for the Ladakh Dreams tour?" : "Itinerary & Experience"}
                        </h2>
                        <p style={styles.p}>
                            {isLadakh ? "The journey begins in Leh for acclimatization. Travelers will cross Chang La to witness the changing colors of Pangong Tso lake. The route then descends via Shyok into the Nubra Valley to see the sand dunes of Hundar and experience a ride on double-humped Bactrian camels. The return to Leh involves crossing the mighty Khardung La pass." : data?.description}
                        </p>

                        <h3 style={styles.h2} style={{ marginTop: '4rem' }}>
                            {isLadakh ? "What is excluded from the Ladakh package cost?" : "Exclusions & Notes"}
                        </h3>
                        <p style={styles.p}>
                            {isLadakh ? "The package cost does not cover airfares, lunch, guide fees, entry ticket fees to museums or parks, hotel and driver tips, or any personal expenditures." : "International airfare, personal insurance, and tips are not included."}
                        </p>
                    </div>

                    <aside className="glass" style={styles.sidebar}>
                        <h3 style={{ color: 'var(--brand-primary)', marginBottom: '1.5rem' }}>Intelligence Meters</h3>
                        {data?.intelligence_meters && Object.entries(data.intelligence_meters).map(([key, val]) => (
                            <div key={key} style={styles.meterRow}>
                                <span style={{ textTransform: 'capitalize' }}>{key}</span>
                                <div style={styles.meterTrack}>
                                    <div style={{ ...styles.meterFill, width: `${val}%` }}></div>
                                </div>
                            </div>
                        ))}

                        <button style={styles.cta}>Secure Your Departure</button>
                    </aside>
                </div>
            </section>
        </main>
    );
};

const styles = {
    main: {
        paddingTop: '100px',
        minHeight: '100vh',
    },
    loading: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        color: 'var(--brand-primary)',
    },
    hero: {
        height: '60vh',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), var(--brand-bg)), url(' + heroImg + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    badge: {
        color: 'var(--brand-primary)',
        fontWeight: 700,
        letterSpacing: '0.2em',
        marginBottom: '1rem',
        fontSize: '0.8rem',
    },
    h1: {
        fontSize: 'clamp(2rem, 5vw, 4rem)',
        maxWidth: '900px',
        lineHeight: 1.1,
        marginBottom: '2rem',
    },
    answerBox: {
        padding: '24px',
        maxWidth: '800px',
        borderLeft: '4px solid var(--brand-primary)',
    },
    contentGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: '80px',
    },
    h2: {
        fontSize: '2.25rem',
        marginBottom: '1.5rem',
    },
    p: {
        fontSize: '1.1rem',
        color: 'var(--text-dim)',
        lineHeight: 1.8,
    },
    sidebar: {
        padding: '40px',
        height: 'fit-content',
        position: 'sticky',
        top: '120px',
    },
    meterRow: {
        marginBottom: '20px',
    },
    meterTrack: {
        height: '4px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '2px',
        marginTop: '8px',
    },
    meterFill: {
        height: '100%',
        background: 'var(--brand-primary)',
        borderRadius: '2px',
    },
    cta: {
        width: '100%',
        padding: '16px',
        background: 'var(--brand-primary)',
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        fontWeight: 700,
        marginTop: '2rem',
        cursor: 'pointer',
    }
};

export default DestinationDetail;
