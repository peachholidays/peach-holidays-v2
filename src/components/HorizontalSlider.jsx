import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DestinationCard from './DestinationCard';

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlider = ({ title, items }) => {
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(sliderRef.current.children,
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} style={styles.section}>
            <div className="container">
                <h2 style={styles.title}>{title}</h2>
                <div ref={sliderRef} style={styles.slider} className="no-scrollbar">
                    {items.map((item, index) => (
                        <DestinationCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '80px 0',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '40px',
    },
    slider: {
        display: 'flex',
        gap: '24px',
        overflowX: 'auto',
        padding: '20px 0 40px',
        scrollbarWidth: 'none', // For Firefox
    }
};

export default HorizontalSlider;
