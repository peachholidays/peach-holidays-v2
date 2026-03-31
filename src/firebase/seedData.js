import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";

/**
 * WebLOGIC: Seeding the Ladakh Dreams 2026 Core Data.
 * This function injects the exhaustive JSON payloads into the Firestore database.
 */
export const seedLadakhData = async () => {
    console.log("WebLOGIC: Initiating Ladakh Data Injection...");

    try {
        // 1. Seed Destination: Ladakh
        const destinationRef = doc(db, "destinations", "ladakh");
        await setDoc(destinationRef, {
            slug: "ladakh",
            name: "Ladakh",
            tagline: "The High-Altitude Escape.",
            description: "Often dubbed Little Tibet, Ladakh offers a rare, unfiltered landscape and a cultural depth that mirrors its Tibetan neighbour. The terrain is defined by the Ladakh range rising from the Indus-Shyok confluence.",
            intelligence_meters: { safety: 85, connectivity: 30, hushpitality: 90 },
            best_time: {
                peak: ["April", "May", "June"],
                shoulder: ["July", "August"],
                off: ["September", "October"]
            },
            vibe_tags: ["High-Altitude Escape", "Unfiltered Landscape", "Disconnect-to-Reconnect"]
        });

        // 2. Seed Fixed Departure: Ladakh Dreams 2026
        const departureRef = doc(db, "fixed_departures", "ladakh-dreams-2026");
        await setDoc(departureRef, {
            destination_ref: "destinations/ladakh",
            title: "Ladakh Dreams.",
            duration: "07N-08D",
            dates: ["April 18th", "April 25th", "May 2nd", "May 9th", "May 16th", "May 23rd", "May 30th", "June 6th", "June 13th"],
            pricing: {
                amount: 36490,
                currency: "INR",
                type: "Per Adult on Twin Sharing"
            },
            route: "Leh - Shey - Thiksey - Sindhu Darshan - Shanti Stupa - Chang La - Pangong Tso - Shyok - Nubra Valley - Diskit - Hundar - Khardung La - Magnetic Hill - Sangam - Leh",
            stays: "Leh (2N), Pangong (1N), Nubra (2N), Leh (2N)",
            inclusions: [
                "Hotel/camp accommodations",
                "Transport by Innova/Scorpio/Xylo/Eeco/Omni",
                "07 Breakfasts & 07 Dinners",
                "10-minute camel ride",
                "Return airport transfers",
                "Inner-line permit",
                "Red Cross fee",
                "5% GST"
            ],
            hero_image: "ladakh_dreams_hero.png",
            secondary_image: "nubra_valley_camels.png"
        });

        console.log("WebLOGIC: Ladakh Data Injection SUCCESS.");
        return true;
    } catch (error) {
        console.error("WebLOGIC: Data Injection FAILURE:", error);
        return false;
    }
};

/**
 * WebRANK: Seeding the AI Insights Engine (Topical Authority).
 * Injects GAIEO-optimized articles designed for AI Overview snippets.
 */
export const seedInsightsData = async () => {
    console.log("WebRANK: Initiating Insights Generation...");

    const insights = [
        {
            slug: "sapa-trek-preparation",
            title: "The Silent Sapa: A High-Fidelity Trekking Guide",
            category: "Vibe Check",
            read_time: "6 min",
            hero_image: "sapa_trek_insight_hero.png",
            answer_first: "The best time to trek Sapa is between March and May for vibrant green terraces or September to October for golden harvest landscapes. Successful preparation requires moisture-wicking layers, high-traction boots, and local Hmong guides for authentic trail navigation.",
            content: {
                h2: "What should you pack for a Sapa homestay?",
                body: "Packing light is the luxury choice. Essential items include a 20L daypack, quick-dry therapy layers, a waterproof shell, and personal biometric recovery kits. Homestays are authentic but simplified; expect high-fidelity views with low-fidelity amenities.",
                h3: "Is a guide necessary for Sapa trekking?",
                body_secondary: "Absolutely. The trails are shifting ecosystems. Hmong and Red Dao guides possess the 'Energy DNA' of the mountains, navigating paths that Google Maps cannot yet resolve. It ensures safety and direct community reinvestment."
            },
            departure_ref: "sapa-trek-2026"
        },
        {
            slug: "ladakh-energy-calibration",
            title: "Ladakh: Calibrating for the High-Altitude Desert",
            category: "Intelligence",
            read_time: "8 min",
            hero_image: "ladakh_dreams_hero.png",
            answer_first: "Acclimatization is the primary requirement for Ladakh. Spend the first 48 hours in Leh doing absolutely nothing—this is 'The Great Pause' required to sync your Energy DNA with the 11,500ft atmosphere.",
            content: {
                h2: "Why is the Shyok route better for Pangong Tso?",
                body: "The Shyok river route offers a more direct, scenic path between Nubra and Pangong, avoiding the double-ascent of Khardung La. It is the efficient traveler's choice for maximizing time in the landscape.",
            }
        }
    ];

    try {
        for (const article of insights) {
            await setDoc(doc(db, "content_blog", article.slug), article);
        }
        console.log("WebRANK: Insights Generation SUCCESS.");
        return true;
    } catch (error) {
        console.error("WebRANK: Insights Generation FAILURE:", error);
        return false;
    }
};
