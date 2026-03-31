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
