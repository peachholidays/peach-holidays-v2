import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./config";

/**
 * Fetch Upcoming Fixed Departures
 * Pulls from the 'fixed_departures' collection as architected in Phase 1.
 */
export const getFixedDepartures = async (maxResults = 3) => {
    try {
        const q = query(
            collection(db, "fixed_departures"),
            orderBy("dates.start", "asc"),
            limit(maxResults)
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("WebLOGIC: Firestore Fetch Error (fixed_departures):", error);
        return []; // Fallback handled by UI
    }
};

/**
 * Fetch All Destinations
 */
export const getDestinations = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "destinations"));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("WebLOGIC: Firestore Fetch Error (destinations):", error);
        return [];
    }
};
