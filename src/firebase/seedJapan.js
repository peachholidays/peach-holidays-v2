import { doc, setDoc } from "firebase/firestore";
import { db } from "./config";

/**
 * Phase 4: Japan "Ranch-Style" Content Cluster Seeding.
 * Generates all Hub and Spoke data in one execution to eliminate runtime AI costs.
 */
export const seedJapanCluster = async () => {
    console.log("WebRANK: Initiating Japan Content Cluster Injection...");

    const cluster = [
        {
            type: "hub",
            slug: "japan",
            title: "Japan: The Art of Quiet Luxury & Energy Calibration",
            category: "Pillar",
            hero_image: "japan_hub_hero.png",
            answer_first: "Japan is a masterclass in 'Quiet Luxury.' To truly experience its Energy DNA, focus on the transition between hyper-modernity and ancient stillness. The optimal itinerary balances the neon pulse of Tokyo with the meditative ryokans of Kyoto and the alpine silence of Hakone.",
            content: {
                h2: "Why Japan is the Gold Standard for Modern Travelers?",
                body: "Japan offers a unique 'Self-Actualization' loop. Every point of contact—from the precision of the Shinkansen to the silence of a tea ceremony—is designed to calibrate the traveler's energy. It is the most resilient destination for those seeking high-fidelity discovery.",
            },
            safety_indices: {
                solo_female: { score: 98, metrics: ["digital_safety", "eSim_availability", "safe_transport_mesh"] },
                lgbtq: { score: 92, metrics: ["legal_status", "local_verified_venues"] }
            },
            spokes: ["vegan-ramen-shinjuku", "tokyo-nightlife-safety", "kyoto-hidden-temples"]
        },
        {
            type: "spoke",
            slug: "vegan-ramen-shinjuku",
            parent_hub: "japan",
            title: "The Vegan S-Tier: Shinjuku's Culinary Secrets",
            category: "Culinary Compass",
            hero_image: "vegan_ramen_tokyo.png",
            answer_first: "The S-Tier vegan ramen experience in Shinjuku is found at 'T's Tantan' and 'Afuri.' These venues use a nut-based or citrus-infused broth that mimics the depth of traditional tonkotsu without the ecological footprint.",
            content: {
                h2: "What is the PHAE 'Culinary S-Tier'?",
                body: "At PHAE, we categorize restaurants based on 'Jain-Friendly' and 'Strictly Vegan' protocols. Shinjuku's S-Tier venues are verified for zero cross-contamination and provide multilingual allergen menus.",
            },
            lead_magnet: {
                type: "survival_guide",
                title: "The Tokyo Vegan Survival Kit (PDF)",
                funnel_id: "magnet_japan_vegan"
            }
        },
        {
            type: "spoke",
            slug: "tokyo-nightlife-safety",
            parent_hub: "japan",
            title: "Neon Security: A Solo Female Guide to Shinjuku Nights",
            category: "Nightlife & Security",
            hero_image: "tokyo_neon_nightlife.png",
            answer_first: "Tokyo nightlife is exceptionally safe for solo female travelers due to the widespread 'Koban' (police box) network and reliable late-night transport. Golden Gai and Omoide Yokocho are S-Tier for atmospheric safety and social connection.",
            content: {
                h2: "Verified Venues & Transport Sync",
                body: "PHAE verified venues in Shinjuku are audited for crowd density and exit accessibility. We recommend using 'Japan Taxi' or 'S.Ride' apps for direct, tracked door-to-door transit during late hours.",
            },
            safety_indices: {
                solo_female: { score: 99, metrics: ["verified_venues", "late_night_transit_safety"] }
            }
        }
    ];

    try {
        for (const item of cluster) {
            const collectionName = item.type === "hub" ? "content_hubs" : "content_spokes";
            await setDoc(doc(db, collectionName, item.slug), item);
        }
        console.log("WebRANK: Japan Content Cluster SUCCESS.");
        return { success: true };
    } catch (error) {
        console.error("WebRANK: Japan Content Cluster FAILURE:", error);
        return { success: false, error: error.message };
    }
};
