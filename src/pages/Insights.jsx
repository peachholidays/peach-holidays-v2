import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

/**
 * WebRANK: Insights Aggregator v2
 * High-performance directory fetching from Hubs, Spokes, and Legacy Content Blog.
 */
const Insights = () => {
    const [insights, setInsights] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllInsights = async () => {
            try {
                // Parallel fetch from all content collections
                const [blogSnap, hubsSnap, spokesSnap] = await Promise.all([
                    getDocs(collection(db, "content_blog")),
                    getDocs(collection(db, "content_hubs")),
                    getDocs(collection(db, "content_spokes"))
                ]);

                const blogs = blogSnap.docs.map(doc => ({ id: doc.id, type: 'legacy', ...doc.data() }));
                const hubs = hubsSnap.docs.map(doc => ({ id: doc.id, type: 'hub', ...doc.data() }));
                const spokes = spokesSnap.docs.map(doc => ({ id: doc.id, type: 'spoke', ...doc.data() }));

                // Unified state
                setInsights([...hubs, ...spokes, ...blogs]);
            } catch (error) {
                console.error("WebRANK: Error aggregating insights:", error);
            }
            setLoading(false);
        };
        fetchAllInsights();
    }, []);

    const getArticleLink = (article) => {
        if (article.type === 'spoke') {
            return `/insights/${article.parent_hub}/${article.slug}`;
        }
        return `/insights/${article.slug}`;
    };

    return (
        <main style={styles.main}>
            <div className="container">
                <header style={styles.header}>
                    <div style={styles.badge}>PHAE_KNOWLEDGE_GRID_V4</div>
                    <h1 style={styles.h1}>PEACH <span className="gradient-text">INSIGHTS</span></h1>
                    <p style={styles.subtitle}>
                        Decentralized travel intelligence. High-fidelity 'Ranch-Style' content clusters for the curious explorer.
                    </p>
                </header>

                {loading ? (
                    <div style={styles.loading}>Scanning Knowledge Base...</div>
                ) : (
                    <div style={styles.grid}>
                        {insights.map((article) => (
                            <Link key={article.id} to={getArticleLink(article)} className="glass" style={styles.card}>
                                <div style={styles.cardInfo}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <span style={styles.category}>{article.category}</span>
                                        <span style={styles.typeTag}>{article.type === 'hub' ? 'PILLAR' : article.type === 'spoke' ? 'MICRO' : 'INTEL'}</span>
                                    </div>
                                    <h2 style={styles.cardTitle}>{article.title}</h2>
                                    <p style={styles.excerpt}>{article.answer_first?.substring(0, 100)}...</p>
                                    <div style={styles.cardFooter}>
                                        <span>{article.read_time || '5 min'} read</span>
                                        <div style={styles.dot}></div>
                                        <span style={{ color: 'var(--brand-primary)' }}>Retrieve Insight →</span>
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
        fontSize: 'clamp(2.5rem, 8vw, 4rem)',
        fontWeight: 800,
        marginBottom: '1.5rem',
    },
    subtitle: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        maxWidth: '700px',
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
        border: '1px solid var(--brand-glass-border)',
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
        marginBottom: '1rem',
    },
    typeTag: {
        fontSize: '0.6rem',
        padding: '4px 8px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '4px',
        color: 'var(--text-dim)',
    },
    cardTitle: {
        fontSize: '1.5rem',
        lineHeight: 1.3,
        marginBottom: '1rem',
        marginTop: '0.5rem',
    },
    excerpt: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        lineHeight: 1.6,
        marginBottom: '2rem',
        height: '3.2em',
        overflow: 'hidden',
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
