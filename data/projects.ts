export interface Project {
  name: string
  summary: string
  problem: string
  solution: string
  result: string
  href: string
  cover?: string
  images?: string[]
}

export const projects: Project[] = [
  {
    name: 'Student Storage Pros',
    summary: "Management System for Canada's largest storage service",
    problem:
      'Student Storage Pros was running their operations the hard way — coordinating student pickups and deliveries over the phone, tracking orders in spreadsheets, and manually dispatching movers with no real-time visibility into what was happening on the ground. As the business grew to serve students across multiple university campuses, that approach stopped scaling.',
    solution:
      'We built a complete operations platform from the ground up. Students can now book, pay, and track their storage online without calling anyone. Behind the scenes, the operations team gets a single dashboard to manage every order, assign movers, track items in the warehouse, and handle customer relationships — across all campuses at once.',
    result:
      'The business can now take on significantly more volume without adding administrative overhead. Movers know exactly where to be and what to do each day, customers get a smooth self-serve experience, and management has full visibility into the business at any moment.',
    href: 'https://studentstoragepros.com',
    cover: '/assets/projects/Student Storage Pros/cover.jpg',
    images: [
      '/assets/projects/Student Storage Pros/ss-office-calendar.png',
      '/assets/projects/Student Storage Pros/ss-products.png',
      '/assets/projects/Student Storage Pros/ss-orders.png',
    ],
  },
  {
    name: 'DevXAI',
    summary: 'AI Automation Agency Website',
    problem:
      'Most trades contractors across Canada had no real digital presence: outdated or nonexistent websites, invisible in local search, and losing booked jobs to competitors who answered the phone faster or ranked higher on Google Maps. Admin work — quote follow-ups, booking confirmations, review requests — ate hours every week with no system behind it.',
    solution:
      'DevXAI is a fixed-price digital agency built exclusively for Canadian trades businesses. It delivers mobile-first websites that convert visitors into booked jobs, local SEO campaigns targeting searches like "roofer near me," and workflow automations (n8n/Zapier) that handle follow-ups and confirmations once and run forever — all scoped in a 15-minute strategy call with a clear number attached.',
    result:
      'Clients show up in Google Maps and local search where customers are actually looking, their sites are live in 2–4 weeks, and repetitive admin runs 24/7 without staff involvement. Inbound calls increase, response time drops, and contractors stop losing jobs on the phone — they lose them on the job site, where they belong.',
    href: '#',
    cover: '/assets/projects/DevXAI/cover.png',
    images: [
      '/assets/projects/DevXAI/booking.png',
      '/assets/projects/DevXAI/niche.png',
      '/assets/projects/DevXAI/services.png',
    ],
  },
  {
    name: 'Leads Generation Automation',
    summary: 'Automated outreach pipeline for B2B sales teams',
    problem:
      'Sales teams were spending hours manually researching prospects, copy-pasting contact data from websites, and sending generic outreach that went unanswered. There was no system connecting lead discovery, qualification, and first contact — just spreadsheets, browser tabs, and inconsistent follow-through.',
    solution:
      'An n8n automation pipeline that scrapes and cleans prospect data, builds a structured Potential Leads Knowledge Base alongside a Company Knowledge Base, and routes each lead through an AI chatbot layer that qualifies intent before triggering personalised outbound messages — all without human involvement between steps.',
    result:
      'Prospecting and first-touch outreach now run end-to-end automatically. The pipeline sources, qualifies, and contacts leads around the clock, the knowledge bases keep messaging grounded in accurate company and prospect context, and the sales team only enters the conversation once a lead has already been warmed up.',
    href: '#',
    cover: '/assets/projects/Leads Generation Automation/cover.png',
    images: [
      '/assets/projects/Leads Generation Automation/scraping.png',
      '/assets/projects/Leads Generation Automation/leads.png',
      '/assets/projects/Leads Generation Automation/chatbot.png',
      '/assets/projects/Leads Generation Automation/knowledge.png',
    ],
  },
  {
    name: 'Ayla Smart Summaries',
    summary: 'AI-powered meeting summarisation tool',
    problem:
      'Teams were losing hours every week to manual note-taking during meetings — and still walking away with incomplete records. Action items slipped, decisions went undocumented, and there was no searchable history of what was actually said or agreed to across calls.',
    solution:
      'Ayla is an AI meeting assistant that connects to Zoom, Teams, and Meet, processes speech in real time, identifies individual speakers, and extracts meaningful insights from the conversation. It delivers organised summaries with action items, decisions, and key topics — searchable and ready to share within seconds of the call ending.',
    result:
      'Teams went from spending two hours on post-meeting writeups to getting instant, structured summaries with zero manual effort. Follow-up rates increased by 300% for early users, sales reps closed more deals by staying fully present in conversations, and every meeting became a searchable, actionable record rather than a forgotten block on the calendar.',
    href: '#',
    cover: '/assets/projects/Ayla Smart Summaries/cover.png',
    images: [
      '/assets/projects/Ayla Smart Summaries/how-it-works.png',
      '/assets/projects/Ayla Smart Summaries/testimonials.png',
      '/assets/projects/Ayla Smart Summaries/CTA.png',
    ],
  },
  {
    name: 'Invoice Flow',
    summary: 'Automated invoice processing pipeline for accounting teams',
    problem:
      'Accounting teams manually keyed vendor names, amounts, and dates from PDF invoices into Box metadata and then again into their accounting software — a slow, error-prone process that scaled poorly across multiple cost centers. No link existed between a document in Box and the corresponding transaction record, leaving auditors to hunt across two systems.',
    solution:
      'A Node.js/Express webhook server listens for PDF uploads across registered Box folders, fires Box AI structured extraction to pull invoice fields automatically, and writes the results back as Box file metadata in real time. A companion Banana Accounting+ extension then reads those extracted fields via CSV export, matches each invoice to a transaction by supplier name and amount, and stamps the transaction with a direct Box sharing link.',
    result:
      'End-to-end invoice capture now requires zero manual data entry: PDFs uploaded to any of the four monitored folders are fully tagged and linked to their accounting transaction within seconds of upload. Auditors get a clickable DocLink on every transaction, eliminating cross-system searches, and bulk back-processing lets the team retroactively cover hundreds of existing invoices in a single job.',
    href: '#',
    cover: '/assets/projects/Invoice Flow/cover.svg',
    images: [
      '/assets/projects/Invoice Flow/layer_00_service_bootstrap_workflow.svg',
      '/assets/projects/Invoice Flow/layer_01_folder_registration_workflow.svg',
    ],
  },
  {
    name: 'You Social Discovery',
    summary: 'AI-powered social media discovery platform',
    problem:
      'Fashion brands investing heavily in Instagram content had no way to surface that content inside a branded mobile experience — posts lived only on social platforms, with no curation layer, no organized collections, and no admin control over what customers actually saw.',
    solution:
      'You is a full-stack content curation platform that automatically syncs Instagram posts from tracked accounts via EmbedSocial, lets admins organize them into branded showrooms and categories through a Next.js dashboard, and pushes curated collections to a mobile app through a controlled DRAFT → REVIEW → PUBLISHED workflow.',
    result:
      'Brands gain a dedicated mobile storefront fed directly by their social content — with drag-and-drop post ordering, bulk status updates handling 100+ posts in under a second, and real-time sync automation that keeps showrooms current without manual effort.',
    href: '#',
    cover: '/assets/projects/You Social Discovery/cover.png',
    images: [
      '/assets/projects/You Social Discovery/playground.png',
      '/assets/projects/You Social Discovery/showroom.png',
      '/assets/projects/You Social Discovery/dashboard.png',
    ],
  },
]
