# GAIEO-Ready URL & Routing Logic

Designed by **WebRANK (Director of GAIEO & SEO)**

To ensure absolute dominance in both traditional Search and Generative AI Overviews (GAIEO), the following URL structure is mandated for the Project Peach codebase.

## 1. Core Principles
- **Flat Hierarchy**: Maximize crawl efficiency by keeping paths descriptive but shallow.
- **Topical Clusters**: Use folder-based routing to signals specialized authority (e.g., all Vietnam content under `/destinations/vietnam/`).
- **Hyphen-Separated Lowercase**: standard convention for readability.

## 2. Master Slug Matrix

| Entity | Logic | Example |
| :--- | :--- | :--- |
| **Destinations** | `/destinations/{country}/{slug}` | `/destinations/vietnam/sapa-tribal-trek` |
| **Fixed Departures**| `/tours/{dest-slug}-{month-year}` | `/tours/sapa-tribal-trek-oct-2026` |
| **Blog Category** | `/insights/{category}` | `/insights/nightlife` |
| **Blog Post** | `/insights/{category}/{slug}` | `/insights/food/hanoi-street-food-guide` |
| **Legal/Portal** | `/{slug}` | `/travel-insurance`, `/about-us` |

## 3. GAIEO Injection (WebRANK Specialization)
- **Answer-First Anchors**: Every slug should ideally correspond to a "User Intent" question.
- **Schema Reference**: URLs must be mirrored in the `json-ld` `url` property of each document to reinforce entity-linking between the web-page and the Firestore database.
- **Predictive Slugs**: AI agents generating content will prioritize slugs containing high-volume "What is...", "Best time to...", and "How to..." prefixes.
