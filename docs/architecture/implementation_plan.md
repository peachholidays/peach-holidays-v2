# Phase 1 Matrix: Foundation & Architecture

**Prepared by**: The Master Agent Team (WebAURA, WebLOGIC, WebRANK, WebFUNNEL)
**Directive**: Zero-Code Foundation & GAIEO Integration

---

## Task 1: The Zero-Code Stack (WebLOGIC & WebAURA)

**Recommendation**: **Webflow + Wized v2 + BuildShip + Firebase**

### Defense of Choice
| Agent | Perspective | Benefit |
| :--- | :--- | :--- |
| **WebAURA** | UI/UX & Animations | **Webflow** is the only zero-code tool allowing "award-winning" GSAP animations and total CSS control for the Gen Z/Alpha aesthetic. |
| **WebLOGIC** | Backend & Logic | **Wized** provides the native-tier bridge to **Firebase**, allowing complex NoSQL queries and Auth without manual code. **BuildShip** handles the heavy lifting of AI-agent blog generation. |
| **WebRANK** | SEO & GAIEO | Webflow's clean semantic HTML and infinite control over meta-tags/LD+JSON injection make it the "WebRANK" gold standard. |

---

## Task 2: Firestore Database Blueprint (WebLOGIC)

### 1. Collection: `users`
*Documents identified by Firebase Auth `uid`.*
- `email`: string
- `tier`: number (0: Guest, 1: Free, 2: Explorer, 3: Elite, 4: VIP)
- `profile`: map { `name`, `avatar`, `bio`, `dna_profile`: map }
- `subscription`: map { `status`, `expires_at`, `payment_id` }
- `bookings`: array of references to `departures`.

### 2. Collection: `destinations`
*Documents identified by unique `slug`.*
- `name`: string
- `intelligence_meters`: map { `safety`: 0-10, `cost`: 0-10, `connectivity`: 0-10 }
- `dna_bars`: map { `adventure`: 0-100, `relaxation`: 0-100, `culture`: 0-100 }
- `best_time`: map { `peak`: ["Month", "Month"], `shoulder`: ["Month"], `off`: ["Month"] }
- `content`: map { `hero_img`, `summary`, `sections`: array }

### 3. Collection: `fixed_departures`
*Documents identified by `departure_id`.*
- `destination_ref`: reference to `destinations/{slug}`
- `itinerary_title`: string
- `dates`: map { `start`, `end` }
- `inventory`: map { `total`, `booked`, `status`: string }
- `pricing`: map { `amount`, `currency`, `tier_discounts`: map }

### 4. Collection: `content_blog`
*Documents identified by `slug`.*
- `title`: string
- `content_html`: string (AI Generated)
- `category`: string (Destinations, Food, Nightlife, POI)
- `related_entities`: map { `destination_ref`, `poi_refs`: array }
- `meta`: map { `gaieo_title`, `description`, `json_ld_data` }

---

## Task 3: Master URL & GAIEO Structure (WebRANK)

### Semantic Slug Hierarchy
To ensure AI Overviews and search engines instantly understand relationships, we employ a **"Topic Hub & Spoke"** model.

| Entity Type | URL Structure | Example |
| :--- | :--- | :--- |
| **Root Hub** | `/destinations` | `ph-h.com/destinations` |
| **Country Hub** | `/destinations/{country}` | `ph-h.com/destinations/vietnam` |
| **Micro-Experience**| `/destinations/{country}/{slug}` | `ph-h.com/destinations/vietnam/sapa-tribal-trek` |
| **Fixed Departure** | `/tours/{slug}-{date}` | `ph-h.com/tours/sapa-tribal-trek-oct-2026` |
| **Content/Blog** | `/insights/{category}/{slug}` | `ph-h.com/insights/food/hanoi-hidden-street-eats` |

### Relationship Linking Logic (WebRANK)
1. **Dynamic Breadcrumbs**: Reinforces the hierarchy (Home > Destinations > Vietnam > Sapa).
2. **Entity Linking**: Every blog post contains a `destination_ref`. WebRANK will inject hidden Schema metadata that links the article to the destination entity in the Knowledge Graph.
3. **Answer-First Anchors**: Use of `H2` and `H3` tags as semantic questions (e.g., "What is the best time to visit Sapa?") to trigger Google AI Overview snippets.
