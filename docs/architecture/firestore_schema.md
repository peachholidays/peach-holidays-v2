# Firestore Schema Matrix: Project Peach

This document defines the exact NoSQL structure for the Peach Holidays application.

## 1. `users` {Collection}
*Primary identification for personalized travel experiences.*
- **ID**: `uid` (Firebase Auth)
- **fields**:
    - `email`: string
    - `tier`: int (0-4)
    - `profile`: map
        - `first_name`: string
        - `last_name`: string
        - `avatar`: url
        - `bio`: string
    - `interests`: array [string]
    - `booking_history`: array [reference]
    - `created_at`: serverTimestamp

## 2. `destinations` {Collection}
*Content source for Intelligence Meters and DNA Bars.*
- **ID**: `slug` (e.g. `vietnam-hanoi`)
- **fields**:
    - `name`: string
    - `country`: string
    - `intelligence_meters`: map
        - `safety`: float
        - `connectivity`: float
        - `value_for_money`: float
    - `dna_bars`: map
        - `adrenaline`: int (0-100)
        - `serenity`: int (0-100)
        - `culture`: int (0-100)
    - `best_time_to_visit`: map
        - `months`: array [string]
        - `status`: string (e.g. "Peak")

## 3. `fixed_departures` {Collection}
*Bookable tours and events.*
- **ID**: `auto-generated`
- **fields**:
    - `destination_ref`: reference
    - `title`: string
    - `start_date`: timestamp
    - `end_date`: timestamp
    - `price`: map
        - `base`: number
        - `currency`: string (e.g. "USD")
    - `inventory`: map
        - `total`: int
        - `available`: int
    - `status`: string (e.g. "Open", "Closed", "Sold Out")

## 4. `content_blog` {Collection}
*Automated AI-generated content feed.*
- **ID**: `slug`
- **fields**:
    - `title`: string
    - `content_html`: string
    - `author`: string (e.g. "WebRANK-Agent")
    - `publish_date`: timestamp
    - `category`: string
    - `tags`: array [string]
    - `related_entities`: array [reference]
