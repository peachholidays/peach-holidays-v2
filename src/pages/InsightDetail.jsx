import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const InsightDetail = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            const docRef = doc(db, "content_blog", slug);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setArticle(docSnap.data());
            }
            setLoading(false);
        };
        fetchArticle();
    }, [slug]);

    if (loading) return <div style={styles.loading}>Retrieving Intelligence...</div>;
    if (!article) return <div style={styles.loading}>Insight Not Found.</div>;

    return (
        <main style={styles.main}>
            <article className="container">
                <header style={styles.header}>
                    <div style={styles.badge}>{article.category} | {article.read_time} Read</div>
                    <h1 style={styles.h1}>{article.title}</h1>

                    {/* GAIEO Answer-First Section */}
                    <div className="glass" style={styles.answerBox}>
                        <h4 style={{ fontSize: '0.8rem', color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>ANSWER_FIRST_GAIEO</h4>
                        <p style={styles.answerText}>{article.answer_first}</p>
                    </div>
                </header>

                <div style={styles.content}>
                    <h2 style={styles.h2}>{article.content.h2}</h2>
                    <p style={styles.body}>{article.content.body}</p>

                    {article.content.h3 && (
                        <>
                            <h3 style={styles.h2}>{article.content.h3}</h3>
                            <p style={styles.body}>{article.content.body_secondary}</p>
                        </>
                    )}
                </div>

                <footer style={styles.footer}>
                    <div className="glass" style={styles.ctaBox}>
                        <h3>Ready to Sync with this Landscape?</h3>
                        <p>Join our upcoming fixed departures to experience this Energy DNA firsthand.</p>
                        <Link to="/lab/alpha" style={styles.cta}>Explore Fixed Departures</Link>
                    </div>
                </footer>
            </article>
        </main>
    );
};

const styles = {
    main: {
        paddingTop: '160px',
        paddingBottom: '120px',
        minHeight: '100vh',
    },
    header: {
        maxWidth: '800px',
        margin: '0 auto 80px',
        textAlign: 'center',
    },
    badge: {
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        color: 'var(--brand-primary)',
        fontWeight: 700,
        marginBottom: '1.5rem',
        textTransform: 'uppercase',
    },
    h1: {
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        lineHeight: 1.1,
        marginBottom: '3rem',
    },
    answerBox: {
        padding: '32px',
        textAlign: 'left',
        borderLeft: '4px solid var(--brand-primary)',
    },
    answerText: {
        fontSize: '1.25rem',
        lineHeight: 1.6,
        fontWeight: 600,
    },
    content: {
        maxWidth: '700px',
        margin: '0 auto',
    },
    h2: {
        fontSize: '2rem',
        marginBottom: '1.5rem',
        marginTop: '60px',
    },
    body: {
        fontSize: '1.1rem',
        lineHeight: 1.9,
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
    },
    footer: {
        maxWidth: '800px',
        margin: '100px auto 0',
    },
    ctaBox: {
        padding: '60px',
        textAlign: 'center',
    },
    cta: {
        display: 'inline-block',
        background: 'var(--brand-primary)',
        color: 'white',
        padding: '16px 40px',
        borderRadius: '32px',
        textDecoration: 'none',
        fontWeight: 700,
        marginTop: '2rem',
    },
    loading: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        color: 'var(--brand-primary)',
    },
};

export default InsightDetail;
