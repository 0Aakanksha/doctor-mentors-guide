## NEETika — multi-page counselling website

Everything needed is in the brochure except **individual mentor photos** (the team shot is a PDF screenshot, so faces can't be cut out cleanly). I'll ship elegant monogram avatars and swap in real photos whenever you send them as separate files.

### Brand direction (taken from the brochure)
- Deep teal-navy `#183A44` for headings, rose-crimson `#B8465A` for accents, soft mint/sage `#CFE3DA` cards, warm sand `#F0C46A` and sage green highlight circles, pastel gradient washes on section backgrounds.
- Typography: rounded geometric display for headings (Outfit) + clean humanist body (Figtree) — matches the brochure's friendly-clinical feel.
- Lotus-and-caduceus NEETika mark recreated as a clean SVG wordmark for the header/footer.

### Pages

**1. Home (`/`)**
- Animated hero: NEETika wordmark with an SVG lotus/caduceus that draws itself in, tagline "From the doctors to the future doctors" plus the brochure line "The masterstroke to empower your future".
- Headline: "NEET Was Tough, Choosing Your College Shouldn't Be."
- Dashboard grid: 4 large navigation cards (Our Motive, History & Achievements, Our Team, Contact Us) with icons and hover lift.
- Stats strip: 2M+ candidates, 118,000 MBBS seats, 775+ institutions, 10+ years.
- "Why choose counselling?" two-circle section (amber + sage) recreated in CSS.
- Streams badge row: MBBS | BDS | BHMS | BAMS.

**2. Our Motive & Goals (`/motive`)**
- Mission quote: "It's a mission built by the doctors, for the future doctors."
- 4 service pillars: Profile Assessment, Strategic Planning, Application Support, Ongoing Mentorship.
- "What sets us apart" — all 7 points (Legacy of Trust, Doctor-Led Initiative, Multi-Stream Expertise, Scholarship Assistance, Precision Strategy, Structured Process, Commitment to Ethics) as icon rows.

**3. History & Achievements (`/history`)**
- "A Decade of Learning" origin story from the brochure (offline group → online community).
- Vertical timeline with a 10-year badge and milestone markers.
- Achievement counters + the 6-step **Admission Journey** (Submit NEET Score → Match with Mentor → Receive College Options → Form Filling Guidance → Real-Time Alerts → Secure Admission) as a numbered stepped path.

**4. Our Team (`/team`)**
- 6 mentor cards in a responsive grid: Dr Shantanu Pardhi (MBBS, MD), Dr Sheetal Singhal (INICET Expert, AIR 540), Dr Saloni Rathi (MBBS, FMGE Grad), Dr Rishabh Patle (MBBS), Dr Priya Rahangdale, Dr Harsh Shivhare.
- Circular avatar frames with the mint card underneath, matching the brochure layout. Monogram avatars until photos arrive.

**5. Contact Us (`/contact`)**
- Student enquiry form: full name, email, phone, city/state, NEET score, category, domicile state, preferred stream (MBBS/BDS/BHMS/BAMS), message. Zod-validated, with a note that plan and package details are shared personally after enquiry.
- Contact panel: 9479876000, neetika.org@gmail.com, plus a floating WhatsApp button sitewide.
- Short FAQ block.

### Technical notes
- TanStack Start file routes: `src/routes/index.tsx`, `motive.tsx`, `history.tsx`, `team.tsx`, `contact.tsx`; shared header/footer layout in `__root.tsx`.
- Brand tokens (oklch) added to `src/styles.css`; no hardcoded colors in components.
- Hero and timeline animations via CSS keyframes + scroll-reveal — no heavy animation library.
- Form submissions: stored in Lovable Cloud (database table + row-level security so only you can read them) so no enquiry is lost. Say the word if you'd rather it just open an email/WhatsApp instead.
- Per-page SEO titles, descriptions, and Organization/FAQ JSON-LD.

### What to send when convenient
Individual mentor photos, and confirmation of the office city/address if you want it on Contact.
