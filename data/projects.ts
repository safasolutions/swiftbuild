export interface BuildItem {
  /** The system that was built (site, dashboard, automation, etc.) */
  title: string
  description: string
  /** One screenshot per system */
  image?: string
}

export interface Metric {
  label: string
  before: string
  after: string
}

export interface Project {
  name: string
  summary: string
  /** Short, defensible outcome line shown on the card and case-study header */
  outcome?: string
  /** 2–3 sentences: the trade/business, the bottleneck, what it was costing */
  situation: string
  /** The actual systems built — one screenshot each */
  built: BuildItem[]
  /** 3 before → after metrics */
  metrics: Metric[]
  /** Honest framing for the metrics (timeframe, private figures, ranges) */
  metricsNote?: string
  /** Tools integrated */
  stack: string[]
  /** How long it took — ties back to the 4-step process */
  timeline: string
  /** Real client quote — leave unset until one is supplied */
  quote?: { text: string; author: string }
  href: string
  cover?: string
}

export const projects: Project[] = [
  {
    name: 'Student Storage Pros',
    summary: "Management System for Canada's largest storage service",
    outcome: 'More volume across every campus — zero added admin overhead',
    situation:
      "Student Storage Pros coordinates pickups, storage, and returns for students across multiple Canadian university campuses. Every order ran over the phone and lived in spreadsheets, with movers dispatched manually and no real-time view of what was happening on the ground. Each new campus multiplied the admin work — growth meant hiring more office staff, not serving more students.",
    built: [
      {
        title: 'Self-serve booking site',
        description:
          "The public site takes a student from quote to paid booking in a few minutes — pick a campus, choose what to store, see the price, pay online. Pickup and return dates are scheduled in the same flow, and students can log back in any time to track exactly where their items are. What used to be a phone call, a follow-up email, and a spreadsheet row now happens without the office touching it.",
        image: '/assets/projects/Student Storage Pros/ss-hp.PNG',
      },
      {
        title: 'Product & pricing management',
        description:
          "Storage products, add-ons, and pricing live in one admin panel — including which products are available on which campus, and when. Seasonal price changes that used to mean re-editing spreadsheets and announcing updates over group chat now take a couple of clicks, and the public site reflects them instantly.",
        image: '/assets/projects/Student Storage Pros/ss-products.png',
      },
      {
        title: 'Order management dashboard',
        description:
          "Every order across every campus in a single view — status, the items linked to it, where those items sit in the warehouse, payment state, and full customer history. When a student calls with a question, the team answers in seconds instead of cross-referencing three spreadsheets.",
        image: '/assets/projects/Student Storage Pros/ss-orders.png',
      },
      {
        title: 'Dispatch calendar',
        description:
          "Pickups and deliveries are assigned to mover crews from an operations calendar that shows the whole day at a glance. Each crew knows exactly where to be, when, and what they're collecting — and the office sees in real time what's done and what's still on the road. Dispatch went from phone-tag to a five-minute morning routine.",
        image: '/assets/projects/Student Storage Pros/ss-office-calendar.png',
      },
    ],
    metrics: [
      {
        label: 'Order intake',
        before: 'Phone calls + spreadsheets',
        after: 'Self-serve online booking & payment',
      },
      {
        label: 'Dispatch visibility',
        before: 'Manual mover coordination',
        after: 'Live calendar — every crew, every campus',
      },
      {
        label: 'Admin cost of growth',
        before: 'More office staff per campus',
        after: 'Zero added headcount',
      },
    ],
    metricsNote:
      'Exact volume figures are private — outcomes reflect the first full storage season on the new platform.',
    stack: ['Custom web platform', 'Online payments', 'Ops dashboard', 'Dispatch calendar', 'Multi-campus CRM'],
    timeline: '≈8 weeks from audit to live handover, following our 4-step process.',
    href: 'https://studentstoragepros.com',
    cover: '/assets/projects/Student Storage Pros/cover.jpg',
  },
  {
    name: 'DevXAI',
    summary: 'AI Automation Agency Website',
    outcome: 'Sites live in 2–4 weeks, admin runs 24/7',
    situation:
      'Trades contractors across Canada were invisible online — outdated or nonexistent websites, no presence in local search, and booked jobs lost to whoever answered the phone first or ranked higher on Google Maps. Quote follow-ups, booking confirmations, and review requests ate hours of admin every week with no system behind them.',
    built: [
      {
        title: 'Niche-specific landing pages',
        description:
          'Instead of one generic agency page, the site has a dedicated landing page per trade — HVAC, roofing, plumbing, cleaning — each written in that trade’s language, addressing that trade’s specific bottlenecks, and targeting the local "near me" searches its customers actually type. A homeowner searching "roofer in Mississauga" lands on a page about roofing, not a generic services brochure.',
        image: '/assets/projects/DevXAI/niche.png',
      },
      {
        title: 'Fixed-price service catalogue',
        description:
          'Every service is productised with a defined scope, a defined deliverable, and a number attached. Prospects see what an audit, a website, or an automation build costs before they ever get on a call — which filters out bad-fit leads and turns the sales conversation into one about scope, not price haggling.',
        image: '/assets/projects/DevXAI/services.png',
      },
      {
        title: 'Booking flow',
        description:
          'Every CTA on the site funnels into one action: a 15-minute strategy call booked directly from the page. From there, n8n and Zapier automations take over — confirmations, reminders, follow-ups, and review requests all fire automatically, so no lead goes quiet because someone forgot to reply.',
        image: '/assets/projects/DevXAI/booking.png',
      },
    ],
    metrics: [
      {
        label: 'Time to a live site',
        before: 'Months of agency back-and-forth',
        after: 'Live in 2–4 weeks, fixed price',
      },
      {
        label: 'Admin follow-ups',
        before: 'Hours every week, done by hand',
        after: 'Automated, running 24/7',
      },
      {
        label: 'Local search presence',
        before: 'Invisible on Google Maps',
        after: 'Ranking for "near me" searches',
      },
    ],
    metricsNote: 'Delivery window applies to every client site shipped on the platform.',
    stack: ['Mobile-first website build', 'Local SEO (Google Maps)', 'n8n & Zapier automations', 'Online booking'],
    timeline: '2–4 weeks per client site — the build phase of our 4-step process.',
    href: '#',
    cover: '/assets/projects/DevXAI/cover.png',
  },
  {
    name: 'Leads Generation Automation',
    summary: 'Automated outreach pipeline for B2B sales teams',
    outcome: 'Prospecting and first-touch run hands-free, around the clock',
    situation:
      'B2B sales teams were burning hours researching prospects by hand — copy-pasting contact data from websites into spreadsheets, then sending generic outreach that went unanswered. Nothing connected discovery, qualification, and first contact, so follow-through depended entirely on who remembered to do it.',
    built: [
      {
        title: 'Prospect scraping pipeline',
        description:
          'n8n workflows pull prospect data from target sources on a schedule, then clean and normalise it — deduplicating contacts, validating details, and structuring company information into consistent fields. The browser-tab-and-copy-paste routine that ate the first hours of every morning now runs unattended before the team even logs in.',
        image: '/assets/projects/Leads Generation Automation/scraping.png',
      },
      {
        title: 'Leads knowledge base',
        description:
          'Every scraped prospect lands in a structured Potential Leads Knowledge Base — who they are, what the company does, and where they sit in the funnel. When outreach fires, it draws on this context to personalise each message, so the first touch reads like someone did their research — because the pipeline did, automatically.',
        image: '/assets/projects/Leads Generation Automation/leads.png',
      },
      {
        title: 'Company knowledge base',
        description:
          'A parallel Company Knowledge Base holds the facts about the business doing the outreach — services, offers, positioning, tone. Every generated message is grounded in both bases at once, which keeps the AI accurate and on-brand instead of improvising claims nobody signed off on.',
        image: '/assets/projects/Leads Generation Automation/knowledge.png',
      },
      {
        title: 'AI qualification chatbot',
        description:
          'Before any message goes out, an AI layer scores each lead’s intent and fit against the knowledge bases — filtering out poor matches and routing promising ones into personalised outbound sequences. Humans only enter the thread once a lead replies warm; qualification, timing, and first contact all happen with no one touching the pipeline.',
        image: '/assets/projects/Leads Generation Automation/chatbot.png',
      },
    ],
    metrics: [
      {
        label: 'Prospect research',
        before: 'Hours per day, manual',
        after: 'Automated, runs continuously',
      },
      {
        label: 'First-touch outreach',
        before: 'Generic blasts, low replies',
        after: 'AI-qualified, personalised messages',
      },
      {
        label: 'Pipeline coverage',
        before: 'Business hours, when remembered',
        after: '24/7, no step skipped',
      },
    ],
    metricsNote: 'The sales team now only enters the conversation once a lead has already been warmed up.',
    stack: ['n8n', 'Web scraping & data cleaning', 'AI chatbot (LLM qualification)', 'Structured knowledge bases'],
    timeline: '≈3 weeks from audit to a fully running pipeline.',
    href: '#',
    cover: '/assets/projects/Leads Generation Automation/cover.png',
  },
  {
    name: 'Ayla Smart Summaries',
    summary: 'AI-powered meeting summarisation tool',
    outcome: '300% higher follow-up rate for early users',
    situation:
      'Teams were losing hours every week taking notes during meetings — and still walking away with incomplete records. Action items slipped, decisions went undocumented, and there was no searchable history of what was actually said or agreed across calls.',
    built: [
      {
        title: 'Real-time capture & speaker ID',
        description:
          'Ayla joins calls on Zoom, Teams, and Meet and processes speech as it happens — transcribing in real time and attributing every line to the right speaker. Nobody has to choose between contributing to the conversation and keeping the record, because the record now keeps itself.',
        image: '/assets/projects/Ayla Smart Summaries/how-it-works.png',
      },
      {
        title: 'Structured summaries in seconds',
        description:
          'Within seconds of a call ending, Ayla delivers an organised summary: action items with owners, decisions made, and the key topics discussed. Everything is searchable across the full meeting history and ready to share — so "what did we agree last week?" is a ten-second lookup, not an archaeology dig through old notes.',
        image: '/assets/projects/Ayla Smart Summaries/CTA.png',
      },
      {
        title: 'Early-user validation',
        description:
          'Early-access teams stopped doing post-meeting writeups entirely and saw follow-up rates jump — action items now arrive assigned, in writing, while the meeting is still fresh. Sales reps in the pilot closed more deals simply by staying fully present in conversations instead of splitting attention with note-taking.',
        image: '/assets/projects/Ayla Smart Summaries/testimonials.png',
      },
    ],
    metrics: [
      {
        label: 'Post-meeting writeups',
        before: '~2 hours per meeting',
        after: 'Instant, zero manual effort',
      },
      {
        label: 'Follow-up rate',
        before: 'Action items slipping',
        after: '+300% for early users',
      },
      {
        label: 'Meeting history',
        before: 'Scattered, unsearchable notes',
        after: 'Searchable, structured archive',
      },
    ],
    metricsNote: 'Follow-up figure reported by early-access teams during the pilot.',
    stack: ['Zoom / Teams / Meet integrations', 'Real-time speech processing', 'Speaker identification', 'AI summarisation'],
    timeline: '≈6 weeks from audit to live product, following our 4-step process.',
    href: '#',
    cover: '/assets/projects/Ayla Smart Summaries/cover.png',
  },
  {
    name: 'Invoice Flow',
    summary: 'Automated invoice processing pipeline for accounting teams',
    outcome: 'Zero manual data entry — invoices tagged in seconds',
    situation:
      'An accounting team was keying vendor names, amounts, and dates from PDF invoices into Box metadata — then again into their accounting software — across multiple cost centers. Every invoice meant double entry, and auditors had to hunt across two systems because no link existed between a document and its transaction.',
    built: [
      {
        title: 'Box AI extraction service',
        description:
          'A Node.js/Express webhook server watches the registered Box folders around the clock. The moment a PDF invoice lands, it fires Box AI structured extraction to pull the vendor, amount, date, and cost-center fields — and writes them straight back onto the file as Box metadata in real time, so every document is tagged within seconds of upload. Bulk back-processing ran the same flow over hundreds of pre-existing invoices in a single job.',
        image: '/assets/projects/Invoice Flow/layer_00_service_bootstrap_workflow.svg',
      },
      {
        title: 'Accounting sync & DocLinks',
        description:
          'A companion Banana Accounting+ extension reads the extracted fields via CSV export and matches each invoice to its accounting transaction by supplier name and amount. Every matched transaction gets stamped with a direct Box sharing link — an auditor clicks once and sees the source document, instead of hunting across two systems with a reference number.',
        image: '/assets/projects/Invoice Flow/layer_01_folder_registration_workflow.svg',
      },
    ],
    metrics: [
      {
        label: 'Invoice data entry',
        before: 'Keyed twice by hand',
        after: 'Zero manual entry',
      },
      {
        label: 'Time to tag an invoice',
        before: 'Minutes per invoice',
        after: 'Seconds after upload',
      },
      {
        label: 'Audit trail',
        before: 'Hunting across two systems',
        after: 'One-click DocLink on every transaction',
      },
    ],
    metricsNote:
      'Bulk back-processing retroactively covered hundreds of existing invoices in a single job.',
    stack: ['Node.js / Express', 'Box AI structured extraction', 'Box webhooks & metadata', 'Banana Accounting+ extension'],
    timeline: '≈3 weeks from audit to all four monitored folders running live.',
    href: '#',
    cover: '/assets/projects/Invoice Flow/cover.svg',
  },
  {
    name: 'You Social Discovery',
    summary: 'AI-powered social media discovery platform',
    outcome: '100+ posts bulk-updated in under a second',
    situation:
      'Fashion brands were investing heavily in Instagram content that lived — and died — on the platform. There was no way to surface it inside a branded mobile experience: no curation layer, no organised collections, and no admin control over what customers actually saw.',
    built: [
      {
        title: 'Automated Instagram sync',
        description:
          'Posts from tracked Instagram accounts flow into the platform automatically via EmbedSocial — media, captions, and metadata included. Real-time sync automation keeps everything current, so the content team never reposts anything by hand and showrooms never quietly go stale.',
        image: '/assets/projects/You Social Discovery/playground.png',
      },
      {
        title: 'Branded showrooms & categories',
        description:
          'Admins organise synced posts into branded showrooms and categories that feed a dedicated mobile storefront — turning a brand’s Instagram feed into curated, organised collections inside its own app, instead of content that lives and dies on the platform.',
        image: '/assets/projects/You Social Discovery/showroom.png',
      },
      {
        title: 'Curation dashboard',
        description:
          'A Next.js dashboard gives the team full editorial control: drag-and-drop post ordering, bulk status changes across 100+ posts in under a second, and a controlled DRAFT → REVIEW → PUBLISHED workflow so nothing reaches customers without sign-off. Curating a season’s worth of content went from a manual slog to minutes of work.',
        image: '/assets/projects/You Social Discovery/dashboard.png',
      },
    ],
    metrics: [
      {
        label: 'Content curation',
        before: 'Posts trapped on Instagram',
        after: 'Branded showrooms in a mobile app',
      },
      {
        label: 'Bulk updates',
        before: 'One post at a time',
        after: '100+ posts in under a second',
      },
      {
        label: 'Keeping showrooms current',
        before: 'Manual reposting',
        after: 'Real-time sync, zero effort',
      },
    ],
    stack: ['Next.js dashboard', 'EmbedSocial API', 'Mobile app', 'Publishing workflow engine'],
    timeline: '≈6 weeks from audit to live handover, following our 4-step process.',
    href: '#',
    cover: '/assets/projects/You Social Discovery/cover.png',
  },
]
