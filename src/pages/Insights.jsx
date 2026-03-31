import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const Insights = () => {
    const [insights, setInsights] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInsights = async () => {
            const querySnapshot = await getDocs(collection(db, "content_blog"));
            setInsights(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
        };
        fetchInsights();
    }, []);

    return (
        <main style={styles.main}>
            <div className="container">
                <header style={styles.header}>
                    <div style={styles.badge}>WEB_RANK_ENGINE_V1</div>
                    <h1 style={styles.h1}>PEACH <span className="gradient-text">INSIGHTS</span></h1>
                    <p style={styles.subtitle}>
                        High-fidelity travel intelligence. Calibrated for the curious, the adventurous, and the seekers of Energy DNA.
                    </p>
                </header>

                {loading ? (
                    <div style={styles.loading}>Scanning Knowledge Base...</div>
                ) : (
                    <div style={styles.grid}>
                        {insights.map((article) => (
                            <Link key={article.id} to={`/insights/${article.slug}`} className="glass" style={styles.card}>
                                <div style={styles.cardInfo}>
                                    <span style={styles.category}>{article.category}</span>
                                    <h2 style={styles.cardTitle}>{article.title}</h2>
                                    <p style={styles.excerpt}>{article.answer_first.substring(0, 100)}...</p>
                                    <div style={styles.cardFooter}>
                                        <span>{article.read_time} read</span>
                                        <div style={styles.dot}></div>
                                        <span style={{ color: 'var(--brand-primary)' }}>Read Insight →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

const styles = {
    main: {
        paddingTop: '160px',
        minHeight: '100vh',
        paddingBottom: '120px',
    },
    header: {
        textAlign: 'center',
        marginBottom: '80px',
    },
    badge: {
        fontSize: '0.7rem',
        letterSpacing: '0.3em',
        color: 'var(--brand-primary)',
        fontWeight: 700,
        marginBottom: '1rem',
    },
    h1: {
        fontSize: '4rem',
        fontWeight: 800,
        marginBottom: '1.5rem',
    },
    subtitle: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        maxWidth: '600px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '32px',
    },
    card: {
        display: 'block',
        textDecoration: 'none',
        color: 'white',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
    },
    cardInfo: {
        padding: '32px',
    },
    category: {
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--brand-primary)',
        fontWeight: 700,
        display: 'block',
        marginBottom: '1rem',
    },
    cardTitle: {
        fontSize: '1.5rem',
        lineHeight: 1.3,
        marginBottom: '1rem',
    },
    excerpt: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        lineHeight: 1.6,
        marginBottom: '2rem',
    },
    cardFooter: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.4)',
        gap: '12px',
    },
    dot: {
        width: '4px',
        height: '4px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '50%',
    },
    loading: {
        textAlign: 'center',
        fontSize: '1.5rem',
        color: 'var(--brand-primary)',
        padding: '100px 0',
    }
};

export default Insights;
