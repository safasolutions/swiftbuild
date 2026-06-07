export const NICHE_SLUGS = ['hvac', 'roofing', 'plumbing', 'cleaning'] as const
export const SERVICE_SLUGS = ['ai-audit', 'ai-automations', 'lead-systems', 'website-seo', 'ai-agents'] as const
export type NicheSlug = (typeof NICHE_SLUGS)[number]
export type ServiceSlug = (typeof SERVICE_SLUGS)[number]

export interface PainPoint { title: string; detail: string }
export interface Deliverable { title: string; desc: string }
export interface ProcessStep { num: string; title: string; desc: string }
export interface Package { tier: string; name: string; label: string; featured?: boolean; includes: string[] }
export interface FaqEntry { q: string; a: string }

export interface NicheData {
  slug: NicheSlug
  name: string
  descriptor: string
  heroLines: string[]
  heroSubline: string
  seoTitle: string
  seoDescription: string
  provides: { icon: string; label: string }[]
  servicesIntro: string
  serviceTitles: Record<ServiceSlug, string>
  painPoints: PainPoint[]
  context: string
  tools: string[]
  whoFor: { good: string[]; notFor: string[] }
  ctaLine: string
  inactionCost: string
  extraFaqs: FaqEntry[]
  hubFaqs: FaqEntry[]
}

export interface ServiceData {
  slug: ServiceSlug
  name: string
  descriptor: string
  whatItIs: string
  heroSubline: string
  deliverables: Deliverable[]
  process: ProcessStep[]
  outcome: string
  packages: Package[]
  faq: FaqEntry[]
  calLink: string
  ctaOfferTitle: string
  ctaOfferDesc: string
  ctaOfferBadges: string[]
  ctaButtonText: string
  nicheCallouts: Record<NicheSlug, string>
}

export const niches: NicheData[] = [
  {
    slug: 'hvac',
    name: 'HVAC',
    descriptor: 'Heating, cooling, and field service',
    heroLines: ['Always on.', 'Always booked.'],
    heroSubline:
      'We build AI systems, automations, and websites specifically for HVAC businesses across Canada.',
    seoTitle: 'HVAC AI Solutions — SwiftBuild',
    seoDescription:
      "SwiftBuild builds AI systems, automations, websites, and lead systems specifically for HVAC businesses across Canada. Find out what's right for your operation.",
    provides: [
      { icon: 'icon-bolt-solid', label: 'Custom Websites' },
      { icon: 'icon-search-solid', label: 'Local SEO' },
      { icon: 'icon-user-check-solid', label: 'Lead & Booking Automation' },
      { icon: 'icon-envelope-solid', label: 'Automated Follow-ups' },
      { icon: 'icon-robot-solid', label: 'After-hours AI Agents' },
      { icon: 'icon-plug-solid', label: 'CRM & Tool Integrations' },
    ],
    servicesIntro:
      'Five systems that keep HVAC crews booked — from the website that wins local search to the agent that answers when your techs are on a call.',
    serviceTitles: {
      'ai-audit': 'HVAC Workflow Audit',
      'ai-automations': 'Quote Follow-up Automation',
      'lead-systems': 'Missed-Call Lead & Booking System',
      'website-seo': 'HVAC Website + Local SEO',
      'ai-agents': 'After-hours AI Agent',
    },
    painPoints: [
      {
        title: 'After-hours calls going to voicemail, never followed up',
        detail: "Every missed call after 6pm is a job someone else booked. That customer isn't calling back tomorrow.",
      },
      {
        title: 'Quotes sent with no follow-up system — leads go cold',
        detail: "You spent an hour on that estimate. It sat in their inbox while they hired the guy who called back first.",
      },
      {
        title: 'Scheduling techs manually through calls and texts',
        detail: "You're the owner, the dispatcher, and the tech support desk. That's not a business — that's three jobs.",
      },
      {
        title: 'Seasonal demand spikes with no automated overflow handling',
        detail: "July and January should be your best months. Instead, they're the months where things fall through the cracks.",
      },
      {
        title: 'Google reviews never requested, never responded to',
        detail: "Reviews are your best salesperson and they work for free. Most HVAC owners never ask, and never reply.",
      },
      {
        title: 'Website leads sitting with no instant response',
        detail: "A lead that waits more than 5 minutes is already reading your competitor's website. Speed wins.",
      },
    ],
    context:
      "HVAC businesses run on speed and trust. A homeowner whose AC fails in July isn't waiting two hours for a callback — they're calling whoever answers first. At the same time, HVAC owners are managing seasonal swings, tech dispatch, and quote follow-up almost entirely through phone calls and group texts. The businesses winning in this trade are the ones that stop doing it that way.",
    tools: ['Jobber', 'ServiceTitan', 'Housecall Pro', 'FieldEdge', 'Service Fusion'],
    whoFor: {
      good: [
        'You own an HVAC business with a team of 3 to 30',
        "You've got real revenue coming in — this isn't your first year",
        'Your operations feel held together with duct tape and group texts',
        "You know better tools exist but don't know where to start",
        "You're tired of being the bottleneck in your own business",
        "You want a real plan — not a sales pitch for someone else's software",
      ],
      notFor: [
        "You just started and don't have consistent revenue yet",
        "You're already running advanced automation across your entire operation",
        "You're looking for a quick fix with no follow-through on your end",
      ],
    },
    ctaLine: 'Book a free 20-minute AI Snapshot — find exactly where your HVAC business is losing money.',
    inactionCost:
      "Missed after-hours calls and cold quotes add up every single week. The 20-minute snapshot is free. The inaction isn't.",
    extraFaqs: [
      {
        q: 'Do you work with businesses using ServiceTitan or Jobber?',
        a: "Yes — the majority of our HVAC clients are on Jobber, ServiceTitan, or Housecall Pro. We build everything to connect with these platforms, not around them. The audit also evaluates whether you're getting full value from what you're already paying for.",
      },
    ],
    hubFaqs: [
      {
        q: "What's the best place to start for an HVAC company?",
        a: "For most HVAC businesses, the AI Audit is the right starting point. It maps exactly where you're losing time and money and gives you a prioritized plan — so you're not guessing what to fix first.",
      },
      {
        q: 'Do you work with HVAC companies using ServiceTitan?',
        a: "Yes. We work with businesses on Jobber, ServiceTitan, Housecall Pro, and FieldEdge. We build systems that connect with your existing tools, not around them.",
      },
      {
        q: 'How fast can you get a lead system running?',
        a: "A basic missed call text-back and lead capture system can be live within a week. A full end-to-end lead and booking system typically takes 2–3 weeks from kickoff.",
      },
      {
        q: 'Does this work for seasonal businesses?',
        a: "Yes — and seasonal businesses often benefit the most. Automated lead capture and follow-up means your pipeline doesn't go cold in the off-season, and your team isn't overwhelmed during peak demand.",
      },
    ],
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    descriptor: 'Residential and commercial roofing',
    heroLines: ['More roofs.', 'Less chasing.'],
    heroSubline:
      'Websites, local SEO, and lead automation built for roofing companies across Canada — so storm-season leads turn into signed jobs, not cold estimates.',
    seoTitle: 'Roofing Websites, SEO & Lead Automation in Canada | SwiftBuild',
    seoDescription:
      'SwiftBuild builds websites, local SEO, lead automation, and AI systems for roofing companies across Canada — capture storm-season leads, follow up on every estimate, and keep your crew booked.',
    provides: [
      { icon: 'icon-bolt-solid', label: 'Custom Roofing Websites' },
      { icon: 'icon-search-solid', label: 'Local SEO & Google Maps' },
      { icon: 'icon-user-check-solid', label: 'Lead Capture & Booking' },
      { icon: 'icon-envelope-solid', label: 'Estimate Follow-up Systems' },
      { icon: 'icon-robot-solid', label: 'After-hours AI Agents' },
      { icon: 'icon-plug-solid', label: 'CRM & Tool Integrations' },
    ],
    servicesIntro:
      'Five systems that plug the leaks in your pipeline — from the website that wins the storm search to the agent that answers while your crew is on a roof.',
    serviceTitles: {
      'ai-audit': 'Roofing Pipeline Audit',
      'ai-automations': 'Estimate Follow-up Automation',
      'lead-systems': 'Storm Lead & Booking System',
      'website-seo': 'Roofing Website + Local SEO',
      'ai-agents': 'After-hours AI Agent',
    },
    painPoints: [
      {
        title: 'Storm-season lead floods',
        detail: "When a hailstorm hits, every roofer in town is chasing the same leads. The one with a system captures them. The rest lose them.",
      },
      {
        title: 'Estimates with zero follow-up',
        detail: "You sent that estimate two weeks ago. No one followed up. Now they're signed with someone else.",
      },
      {
        title: 'Cold quotes never re-engaged',
        detail: "You have months of quoted jobs sitting in your system that were never worked. That's revenue you've already done the work to find.",
      },
      {
        title: 'Sub coordination over phone calls',
        detail: "Coordinating subs through texts and calls means things get missed, schedules slip, and jobs go sideways.",
      },
      {
        title: 'Insurance jobs with no workflow',
        detail: "Insurance jobs take longer and need more touchpoints. Without a system, they become the jobs that bleed money.",
      },
      {
        title: 'Referrals never asked for',
        detail: "You have happy customers who would send you five more clients. They just never got asked, and you don't have a system to do it.",
      },
    ],
    context:
      "Roofing businesses live and die by their pipeline. After a storm, every roofer in the area is chasing the same leads — and the one who responds first and follows up consistently wins. SwiftBuild gives roofing companies across Canada the system to be that roofer: a website that ranks in local search, instant lead response and booking, automated estimate follow-up, and AI agents that cover the calls your crew can't. You focus on the roof. The pipeline runs itself.",
    tools: ['JobNimbus', 'AccuLynx', 'CompanyCam', 'EagleView', 'Hover', 'Roofr'],
    whoFor: {
      good: [
        'You run a roofing company with a crew of 3 or more',
        "You're chasing and quoting leads but not converting enough of them",
        'Storm season overwhelms your current process every time',
        "You're coordinating with subs through texts and losing track of jobs",
        "You know referrals should be bringing you more work but they aren't",
        "You want systems — not more apps that your team won't use",
      ],
      notFor: [
        "You just launched and are still building your initial client base",
        'Your pipeline and follow-up are already fully automated',
        "You're not willing to change the way your team operates",
      ],
    },
    ctaLine: 'Book a free 20-minute call — find out exactly where your roofing pipeline is leaking revenue.',
    inactionCost:
      "Storm leads go cold in hours. Every week without a follow-up system is another pipeline that drains instead of fills.",
    extraFaqs: [
      {
        q: 'Do you work with roofing companies handling insurance jobs?',
        a: "Yes. We work with roofing companies across all job types, including insurance claims. For insurance-heavy operations, we build documentation workflows, follow-up sequences, and adjuster communication tools that significantly reduce the admin burden.",
      },
    ],
    hubFaqs: [
      {
        q: 'What services does SwiftBuild offer roofing companies?',
        a: "We build custom roofing websites with local SEO, lead capture and booking automation, automated estimate follow-up, after-hours AI agents, and workflow audits. Everything is designed around how roofing businesses across Canada actually operate — and it all integrates with the tools you already use.",
      },
      {
        q: 'How does pricing work?',
        a: "Every project starts with a fixed-price quote — no hourly billing, no surprises. Website and local SEO packages start at $2,500; lead systems and automations are scoped to your operation. You'll know the full cost before we build anything.",
      },
      {
        q: 'How long until my roofing website is live?',
        a: "A custom roofing website with local SEO typically takes 3 to 4 weeks from kickoff to launch. Lead systems and workflow automations usually take 2 to 3 weeks. We work in fixed scopes, so you get a clear timeline before the project starts.",
      },
      {
        q: 'Can your systems handle storm-season lead volume?',
        a: "That's exactly what the lead and appointment systems are built for. Automated response, lead qualification, and booking mean your team isn't overwhelmed when 50 leads come in over a weekend.",
      },
      {
        q: 'Do you integrate with JobNimbus, AccuLynx, or my current tools?',
        a: "Yes. We integrate with JobNimbus, AccuLynx, CompanyCam, EagleView, Hover, Roofr, and most roofing and field-service platforms. We build systems that work with your existing stack — not around it.",
      },
      {
        q: 'Do you work with roofing companies anywhere in Canada?',
        a: "Yes. We work with roofing businesses across Canada — every project is delivered remotely, and our local SEO work is built around Canadian regional search, so your company shows up where your customers are actually looking.",
      },
      {
        q: 'Who owns the website and automations after delivery?',
        a: "You do. Once delivered, you own 100% of the website, code, and automations. No lock-in, no platform dependency — if we ever part ways, everything keeps running and it's all yours.",
      },
    ],
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    descriptor: 'Residential and commercial plumbing',
    heroLines: ['Calls answered.', 'Jobs booked.'],
    heroSubline:
      'We build AI systems, automations, and websites specifically for Plumbing businesses across Canada.',
    seoTitle: 'Plumbing AI Solutions — SwiftBuild',
    seoDescription:
      "SwiftBuild builds AI systems, automations, websites, and lead systems specifically for Plumbing businesses across Canada. Find out what's right for your operation.",
    provides: [
      { icon: 'icon-bolt-solid', label: 'Custom Websites' },
      { icon: 'icon-search-solid', label: 'Local SEO' },
      { icon: 'icon-user-check-solid', label: 'Lead & Booking Automation' },
      { icon: 'icon-envelope-solid', label: 'Automated Follow-ups' },
      { icon: 'icon-robot-solid', label: 'After-hours AI Agents' },
      { icon: 'icon-plug-solid', label: 'CRM & Tool Integrations' },
    ],
    servicesIntro:
      'Five systems that keep the calls coming and the schedule full — from instant emergency response to bringing past customers back.',
    serviceTitles: {
      'ai-audit': 'Plumbing Operations Audit',
      'ai-automations': 'Re-engagement & Invoice Automation',
      'lead-systems': 'Emergency Call & Booking System',
      'website-seo': 'Plumbing Website + Local SEO',
      'ai-agents': 'After-hours AI Agent',
    },
    painPoints: [
      {
        title: 'Emergency calls going unanswered after hours',
        detail: "A homeowner with a burst pipe calls at 10pm. If you don't answer, your competitor does — and earns a customer for life.",
      },
      {
        title: 'Repeat customer base with no automated re-engagement',
        detail: "Your best customers have another job waiting — a water heater, a fixture, a drain. They just haven't called yet. And you have no system to reach them first.",
      },
      {
        title: 'Dispatch chaos across multiple jobs and techs',
        detail: "You're running dispatch in your head or through texts. When things go wrong, there's no system — just you on the phone sorting it out.",
      },
      {
        title: 'No system for upselling service plans or maintenance agreements',
        detail: "Service plans are recurring revenue that smooths your cash flow. Most plumbing companies never offer them because they have no system to manage them.",
      },
      {
        title: 'Invoice follow-up done manually or not at all',
        detail: "Outstanding invoices sit because chasing payment takes time you don't have. That's your money — and it's already in their bank.",
      },
      {
        title: 'Seasonal campaign promotions never executed due to time',
        detail: "You meant to send a water heater promo in October. You didn't. A hundred customers installed someone else's water heater this winter.",
      },
    ],
    context:
      "Plumbing businesses have a built-in advantage most other trades don't: customers come back. Water heaters age, pipes corrode, fixtures fail. But most plumbing companies have no system to stay in front of their existing customer base — which means every recurring job goes to whoever shows up at the top of Google that day. The businesses winning in this trade are the ones that have automated re-engagement and instant response.",
    tools: ['Jobber', 'ServiceTitan', 'Housecall Pro', 'Service Fusion', 'FieldEdge'],
    whoFor: {
      good: [
        'You run a plumbing company with techs in the field',
        'You have a customer base that should be generating more recurring work',
        'After-hours coverage is a real gap in your operation',
        "You're losing track of jobs and follow-ups as the business grows",
        "You know you're leaving service plan revenue on the table",
        "You want your operation to run without everything going through you",
      ],
      notFor: [
        "You're a solo plumber with no team yet",
        'You already have robust re-engagement and follow-up systems',
        "You're not ready to invest in improving your operations",
      ],
    },
    ctaLine: 'Book a free 20-minute call — find out where your plumbing business is leaving money on the table.',
    inactionCost:
      "Every missed after-hours call is a job your competitor booked. Every un-re-engaged customer is revenue that walked out the door.",
    extraFaqs: [
      {
        q: 'Can you integrate with plumbing dispatch tools?',
        a: "Yes. We work with Jobber, ServiceTitan, Housecall Pro, and most major dispatch platforms. Whether you're running a small team or managing multiple crews, we build systems that connect with the tools you already use.",
      },
    ],
    hubFaqs: [
      {
        q: "What's the best starting point for a plumbing company?",
        a: "For most plumbing businesses, either the AI Lead System or AI Automations has the most immediate impact. The lead system captures the after-hours emergency calls you're currently missing. The automations handle re-engagement and invoice follow-up that's costing you money every week.",
      },
      {
        q: 'Can you help us launch a service plan program?',
        a: "Yes. We can build the system that manages service plan sign-ups, scheduling, reminders, and renewals — everything that makes a service plan program actually work without adding admin time.",
      },
      {
        q: 'Do you integrate with dispatch tools like Jobber?',
        a: "Yes. We integrate with Jobber, ServiceTitan, Housecall Pro, and most major field service management platforms.",
      },
      {
        q: 'Can an AI agent handle plumbing emergency calls?',
        a: "Yes. We build agents specifically trained on your services, service areas, and emergency response protocols. They can capture the inquiry, qualify the urgency, and either book an appointment or escalate to an on-call tech — in seconds.",
      },
    ],
  },
  {
    slug: 'cleaning',
    name: 'Cleaning Services',
    descriptor: 'Residential and commercial cleaning',
    heroLines: ['Booked solid.', 'Clients kept.'],
    heroSubline:
      'We build AI systems, automations, and websites specifically for Cleaning Services businesses across Canada.',
    seoTitle: 'Cleaning Services AI Solutions — SwiftBuild',
    seoDescription:
      "SwiftBuild builds AI systems, automations, websites, and lead systems specifically for Cleaning Services businesses across Canada. Find out what's right for your operation.",
    provides: [
      { icon: 'icon-bolt-solid', label: 'Custom Websites' },
      { icon: 'icon-search-solid', label: 'Local SEO' },
      { icon: 'icon-user-check-solid', label: 'Lead & Booking Automation' },
      { icon: 'icon-envelope-solid', label: 'Automated Follow-ups' },
      { icon: 'icon-robot-solid', label: 'After-hours AI Agents' },
      { icon: 'icon-plug-solid', label: 'CRM & Tool Integrations' },
    ],
    servicesIntro:
      'Five systems that keep recurring clients on the schedule — from automated bookings and reviews to win-backs that stop churn.',
    serviceTitles: {
      'ai-audit': 'Cleaning Operations Audit',
      'ai-automations': 'Retention & Review Automation',
      'lead-systems': 'Booking & Lead System',
      'website-seo': 'Cleaning Website + Local SEO',
      'ai-agents': 'Client Onboarding AI Agent',
    },
    painPoints: [
      {
        title: 'Recurring booking management done manually',
        detail: "You're scheduling clients through texts, calls, and spreadsheets. One cancellation and the whole week's schedule becomes a phone call.",
      },
      {
        title: 'Client churn with no re-engagement or win-back system',
        detail: "Clients stop booking and you never know why. You have no system to reach out before they cancel or win them back after they do.",
      },
      {
        title: 'No automated review collection after each job',
        detail: "You're delivering a great clean and getting nothing in return for it. Reviews need to be asked for while the client is still happy — and that needs a system.",
      },
      {
        title: 'Staff scheduling and availability handled through group texts',
        detail: "Group texts for scheduling mean missed messages, last-minute no-shows, and you spending your morning re-dispatching instead of running the business.",
      },
      {
        title: 'New client onboarding done through back-and-forth emails',
        detail: "Every new client takes 4–6 emails to onboard. That's hours of your time every month for something that should be completely automated.",
      },
      {
        title: 'Referral program exists in theory but never executed systematically',
        detail: "You've told clients you pay for referrals. No one has ever cashed in because there's no system to track it, remind them, or follow through.",
      },
    ],
    context:
      "Cleaning businesses operate on recurring revenue — the best clients book weekly or bi-weekly and stay for years. But retention depends on communication, consistency, and follow-up that most cleaning companies can't deliver because it's all done by hand. The cleaning businesses that scale are the ones that automate the client experience from booking through re-engagement.",
    tools: ['ZenMaid', 'Swept', 'Launch27', 'Jobber', 'Housecall Pro'],
    whoFor: {
      good: [
        'You run a cleaning company with recurring clients and a crew',
        'Your client retention depends on personal relationships and manual follow-up',
        "You're losing clients to cancellation and don't have a win-back process",
        "New client onboarding takes too much of your time and isn't consistent",
        'Review collection is manual or nonexistent',
        'You want to grow the business without adding admin headcount',
      ],
      notFor: [
        "You're just starting out with fewer than 10 regular clients",
        'You already have automated booking, re-engagement, and review collection',
        "You're not willing to change your current client communication approach",
      ],
    },
    ctaLine: 'Book a free 20-minute call — find out where your cleaning business is losing recurring revenue.',
    inactionCost:
      "Every client who cancels without a win-back sequence is gone for good. Every week without review automation is reputation you're not building.",
    extraFaqs: [
      {
        q: 'Do you work with residential cleaning companies specifically?',
        a: "Yes. We work with residential and commercial cleaning businesses. Our systems are designed around how cleaning operations actually run — recurring bookings, route management, client communication, and retention — not adapted from something built for a different industry.",
      },
    ],
    hubFaqs: [
      {
        q: "What's the best starting point for a cleaning company?",
        a: "For most cleaning businesses, either the AI Automations or AI Lead System makes the most immediate impact. If client churn and re-engagement are your biggest issues, start with automations. If you're losing new leads, start with the lead system.",
      },
      {
        q: 'Can you help us automate recurring booking confirmations?',
        a: "Yes. We build automated confirmation and reminder sequences for recurring clients — reducing no-shows and cancellations without anyone on your team having to send a single message.",
      },
      {
        q: 'Do you work with ZenMaid or Swept?',
        a: "Yes. We integrate with ZenMaid, Swept, Launch27, and other cleaning-specific tools. We build systems that work with your existing software, not around it.",
      },
      {
        q: 'Can an AI agent handle new client onboarding?',
        a: "Yes. We build agents that walk new clients through onboarding — collecting preferences, payment info, scheduling details, and answering FAQs — before their first clean. What used to take 6 emails now happens in a single automated conversation.",
      },
    ],
  },
]

export const services: ServiceData[] = [
  {
    slug: 'ai-audit',
    name: 'AI Audit',
    descriptor: 'A structured review of how your business actually operates',
    whatItIs:
      "An AI Audit isn't a tech assessment. It's a business assessment. We look at how your operation actually runs day-to-day — how calls get handled, how jobs get scheduled, how you follow up — and we find the gaps. At the end, you get a written report in plain English showing exactly where you're losing time and money, plus a step-by-step 90-day roadmap to fix it.",
    heroSubline: 'losing time and money — and delivers a written roadmap to fix it',
    deliverables: [
      { title: '60-minute discovery call', desc: 'A structured conversation with you and your team to map how the business actually operates.' },
      { title: 'Full workflow and operations analysis', desc: 'We trace every workflow from first call to final invoice — finding the gaps, bottlenecks, and wasted hours.' },
      { title: 'Opportunity scorecard', desc: 'Your top 5–8 highest-impact opportunities ranked by time and cost savings, with real estimates attached.' },
      { title: 'Trade-specific tool recommendations', desc: 'Specific tool recommendations written for your trade and your current stack — not generic software suggestions.' },
      { title: 'Written 90-day roadmap', desc: 'Not a list of problems. A prioritized, step-by-step implementation plan for a team your size.' },
      { title: 'Report delivery and walkthrough call', desc: 'We walk you through every finding and recommendation so nothing is unclear.' },
      { title: '30-day follow-up check-in', desc: 'A follow-up call 30 days after delivery to review progress and answer implementation questions.' },
    ],
    process: [
      { num: '01', title: 'Discovery Call', desc: 'We map your current operations: how calls come in, how jobs get scheduled, how you follow up, and where the wheels fall off.' },
      { num: '02', title: 'Workflow Mapping', desc: "We trace every workflow from first call to final invoice — finding the gaps, the bottlenecks, and the hours you'll never get back." },
      { num: '03', title: 'Report Build', desc: 'A plain-English written report showing every opportunity ranked by impact. Anyone on your team can read it and understand it.' },
      { num: '04', title: 'Roadmap Delivery', desc: 'Not just a list of problems — a step-by-step plan for fixing them. Prioritized, scoped, and built for a team your size.' },
    ],
    outcome:
      "You know exactly where you're losing time and money. You have a written, prioritized plan to fix it. And you're not guessing what to do next.",
    packages: [
      {
        tier: '01',
        name: 'AI Snapshot Report',
        label: 'Starter',
        includes: [
          'Top 3 highest-impact opportunities',
          '1-page action plan',
          'Priority ranking with time and cost estimates',
          'Delivered within 5 business days',
        ],
      },
      {
        tier: '02',
        name: 'Full AI Audit',
        label: 'Core',
        featured: true,
        includes: [
          'Complete workflow and operations analysis',
          'Full written audit report (15–25 pages)',
          'Opportunity scorecard — top 5–8 wins',
          'Trade-specific tool recommendations',
          'Written 90-day implementation roadmap',
          'Report delivery and walkthrough call',
        ],
      },
      {
        tier: '03',
        name: 'Deep Audit + Strategy',
        label: 'Premium',
        includes: [
          'Everything in the Full AI Audit',
          'Full tech stack review and integration analysis',
          'One-on-one team interviews',
          'Implementation planning and sequencing',
          '30-day advisory check-in included',
          'Ongoing implementation support available',
        ],
      },
    ],
    faq: [
      { q: "Will I understand the report if I'm not technical?", a: "Yes. We write every report for a business owner, not a developer. No jargon, no acronyms, no slide decks with 47 slides. If you can read a P&L, you'll understand every word." },
      { q: 'How long does the full audit take?', a: "The discovery call is 60 minutes. From there, the full analysis and report typically take 5–10 business days depending on the complexity of your operation." },
      { q: 'Do you implement the recommendations too?', a: "Yes. Audit clients can engage us for implementation — AI lead systems, workflow automations, website builds, and software integrations. The audit tells you what to fix; we can be the ones who fix it." },
      { q: 'Is the free snapshot really free?', a: "100%. No credit card, no hidden fees, no sales pitch at the end. It's a 20-minute call where we identify 3 specific places your business is losing money. You walk away with value whether you ever hire us or not." },
      { q: 'What if I already use Jobber or ServiceTitan?', a: "Most of our clients use one or both. The audit looks at how you're using your tools — not just whether you have them. Most businesses use 20–30% of what these platforms can do." },
      { q: 'What size business does this work for?', a: "The AI Audit works best for businesses with 3–50 employees that have consistent revenue. If you're just starting out, we'd rather you talk to us in 6 months when there's more to optimize." },
    ],
    calLink: 'devxai/ai-snapshot-call',
    ctaOfferTitle: 'Start with a free AI Opportunity Snapshot.',
    ctaOfferDesc:
      "A 20-minute call. We look at your operation and come back with 3 specific findings — real opportunities with real numbers attached. No pitch. No obligation. You walk away with value either way.",
    ctaOfferBadges: ['20 minutes', '3 specific findings', 'No pitch, no obligation'],
    ctaButtonText: 'Book My Free Snapshot Call →',
    nicheCallouts: {
      hvac: "Missed after-hours calls. Cold quotes. Manual scheduling chaos. An AI Audit shows you exactly where the money is going — and gives you a 90-day plan to stop losing it.",
      roofing: "Storm leads going cold. Quote-to-close running on luck. An AI Audit maps your entire pipeline and gives you a prioritized plan to fix it.",
      plumbing: "Emergency calls missed. Customers not coming back. An AI Audit shows you exactly where your plumbing business is leaking revenue.",
      cleaning: "Client churn, manual bookings, no re-engagement. An AI Audit gives you a written plan to fix the systems that are bleeding recurring revenue.",
    },
  },
  {
    slug: 'ai-automations',
    name: 'AI Automations & Workflows',
    descriptor: 'Eliminate manual steps. Let the systems run.',
    whatItIs:
      "AI Automations aren't about replacing your team — they're about eliminating the repetitive tasks that eat their time. Quote follow-ups, review requests, job status updates, invoice reminders, onboarding sequences — these should all happen automatically. We build the workflows that connect your tools, eliminate manual steps, and create systems that run without staff involvement.",
    heroSubline: 'losing hours to manual work — and builds the systems that eliminate it',
    deliverables: [
      { title: 'Workflow audit', desc: 'We map every manual process in your current operation to identify what should be automated.' },
      { title: 'Automation design', desc: "A detailed map of every automation we'll build — what triggers it, what it does, what it connects to." },
      { title: 'Full build and testing', desc: 'We build and test every automation before it touches your live operation.' },
      { title: 'Staff walkthrough', desc: "A training session so your team understands what's automated, what to expect, and how to handle exceptions." },
      { title: 'Documentation', desc: 'Written documentation of every automation — what it does, how to adjust it, and how to add new ones.' },
      { title: '30-day monitoring', desc: 'We monitor every automation for 30 days post-launch to catch anything unexpected before it becomes a problem.' },
    ],
    process: [
      { num: '01', title: 'Map Current Workflows', desc: "We document every manual process in your business — from how leads come in to how invoices get paid — and identify what's costing your team the most time." },
      { num: '02', title: 'Design Automation Logic', desc: 'We design each automation: what triggers it, what it does, what tools it connects to, and how it handles exceptions.' },
      { num: '03', title: 'Build and Test', desc: 'We build every automation against your actual tools and test each one thoroughly before it goes live.' },
      { num: '04', title: 'Hand Off and Monitor', desc: 'We walk your team through everything, document it fully, and monitor the automations for 30 days to ensure everything runs as expected.' },
    ],
    outcome:
      'Hours of manual work eliminated per week. Staff focused on higher-value tasks. Quotes followed up. Reviews requested. Invoices chased. All without anyone having to remember to do it.',
    packages: [
      {
        tier: '01',
        name: 'Workflow Jumpstart',
        label: 'Starter',
        includes: [
          'Single high-impact automation (e.g. quote follow-up or review requests)',
          'Full build and testing',
          'Staff walkthrough',
          '30-day support',
        ],
      },
      {
        tier: '02',
        name: 'Full Workflow Suite',
        label: 'Core',
        featured: true,
        includes: [
          'Workflow audit and automation mapping',
          '3–5 custom automations targeting your highest-impact gaps',
          'Tool integration and connection setup',
          'Full testing and staff walkthrough',
          'Documentation and 30-day monitoring',
        ],
      },
      {
        tier: '03',
        name: 'Complete Operations Stack',
        label: 'Premium',
        includes: [
          'Everything in Full Workflow Suite',
          'End-to-end automation across your entire operation',
          'Advanced multi-step workflow logic',
          'CRM integration and data sync',
          'Ongoing monitoring and optimization',
          'Monthly review and iteration calls',
        ],
      },
    ],
    faq: [
      { q: 'Do we need to change our current tools?', a: "Not necessarily. We build automations that connect to the tools you already use — Jobber, ServiceTitan, Housecall Pro, and most major CRMs. We add automation on top of what you have, not around it." },
      { q: 'How long does it take to build the automations?', a: "A single automation can be live within a week. A full workflow suite typically takes 2–4 weeks from workflow audit to launch, depending on complexity and how many tools we're connecting." },
      { q: 'What if an automation breaks?', a: "We build every automation with error handling and monitoring. During the 30-day monitoring period, we catch and fix anything unexpected. After that, we can provide ongoing support." },
      { q: 'Will my staff need training?', a: "We build automations to run in the background — your staff shouldn't need to do anything differently. We do a full walkthrough so they understand what's automated and know how to handle edge cases." },
      { q: 'Can automations handle customer communication?', a: "Yes. Quote follow-ups, appointment reminders, review requests, invoice reminders, re-engagement sequences — all of these are customer-facing automations we build and manage." },
      { q: "What's the difference between automations and AI agents?", a: "Automations are rule-based — they run a defined set of steps when triggered. AI agents are more dynamic — they can make decisions, answer questions, and handle conversations. Many businesses benefit from both." },
    ],
    calLink: 'devxai/30min',
    ctaOfferTitle: 'Start with a free workflow consultation.',
    ctaOfferDesc:
      "A 30-minute call where we map out which automations would have the highest impact in your business right now. No pitch. No generic software demo. Just a clear view of what's costing your team the most time.",
    ctaOfferBadges: ['30 minutes', 'Custom workflow analysis', 'No obligation'],
    ctaButtonText: 'Book My Free Consultation →',
    nicheCallouts: {
      hvac: "Quote follow-ups, review requests, appointment reminders — all done manually by your team. We build the automations that make it happen without them.",
      roofing: "Storm lead follow-ups, estimate reminders, subcontractor coordination — hours of manual work. We build the automations that handle it for you.",
      plumbing: "Invoice reminders, service plan renewals, re-engagement sequences — all manual. We build the workflows that run without your team.",
      cleaning: "Booking confirmations, review requests, re-engagement sequences, staff scheduling — all done by hand. We automate what should never have been manual.",
    },
  },
  {
    slug: 'lead-systems',
    name: 'AI Lead & Appointment Systems',
    descriptor: 'Never miss a lead. Never wait to respond.',
    whatItIs:
      "An AI Lead & Appointment System handles the entire journey from first contact to booked job — without a human in the loop. When a lead comes in through your website, Google, or a missed call, the system responds instantly, qualifies the lead, and books the appointment. No waiting. No back-and-forth. No lost jobs because someone didn't call back fast enough.",
    heroSubline: 'losing leads to slow response time — and builds a system that books jobs while you sleep',
    deliverables: [
      { title: 'Lead flow audit', desc: "A complete map of how leads currently come in, where they drop off, and what's costing you the most jobs." },
      { title: 'System design', desc: 'A detailed design of your lead capture, qualification, and booking flow — including every touchpoint and handoff.' },
      { title: 'Full build and integration', desc: 'We build the entire system and integrate it with your CRM, calendar, and existing tools.' },
      { title: 'Missed call text-back', desc: 'An automated text response to every missed call within 60 seconds — keeping the lead warm before they call someone else.' },
      { title: 'After-hours response system', desc: 'A system that handles leads after business hours, capturing information and booking appointments for the next available slot.' },
      { title: 'Staff training', desc: 'A walkthrough so your team understands how leads are coming in, what the system is handling, and how to manage the handoff.' },
      { title: '30-day monitoring', desc: 'We monitor the system for 30 days after launch to ensure lead capture rates are where they should be.' },
    ],
    process: [
      { num: '01', title: 'Audit Lead Flow', desc: "We map every path a lead can take to find you — website, Google, referral, missed call — and identify where they're falling through the cracks." },
      { num: '02', title: 'Design System', desc: 'We design the end-to-end system: capture, qualify, respond, book. Including how it integrates with your existing tools and calendar.' },
      { num: '03', title: 'Build and Integrate', desc: 'We build the full system and connect it to your CRM, scheduling tool, and communication platforms.' },
      { num: '04', title: 'Launch and Monitor', desc: 'We launch and monitor every lead flow for 30 days — tracking response rates, conversion rates, and system performance.' },
    ],
    outcome:
      'No lead goes unanswered. Response time drops from hours to seconds. Booked jobs increase without adding headcount or changing how your team works.',
    packages: [
      {
        tier: '01',
        name: 'Lead Response Setup',
        label: 'Starter',
        includes: [
          'Missed call text-back system',
          'Basic website lead capture',
          'Automated initial response sequence',
          '30-day setup support',
        ],
      },
      {
        tier: '02',
        name: 'Full Lead System',
        label: 'Core',
        featured: true,
        includes: [
          'Lead flow audit and system design',
          'End-to-end capture, qualify, respond, and book system',
          'CRM integration',
          'Missed call text-back',
          'After-hours response system',
          'Staff training and 30-day monitoring',
        ],
      },
      {
        tier: '03',
        name: 'Revenue Engine',
        label: 'Premium',
        includes: [
          'Everything in Full Lead System',
          'Multi-channel lead capture (web, Google, social)',
          'AI-powered lead qualification',
          'Custom nurture sequences by lead source',
          'Full CRM pipeline setup',
          'Monthly performance review and optimization',
        ],
      },
    ],
    faq: [
      { q: 'What happens when a lead comes in after hours?', a: "The system responds automatically within seconds — acknowledging the inquiry, collecting key information, and either booking the appointment or queuing it for next-day confirmation. No lead sits unanswered until morning." },
      { q: 'How does missed call text-back work?', a: "When your business misses a call, the system automatically sends a text within 60 seconds. This alone recovers a significant percentage of leads that would otherwise call your competitor." },
      { q: 'Does this replace our receptionist or admin?', a: "It handles the volume and the off-hours coverage that a single person can't. Most clients find their existing admin can focus on higher-value work while the system handles repetitive intake and booking." },
      { q: 'Which tools does it integrate with?', a: "We integrate with Jobber, ServiceTitan, Housecall Pro, Calendly, Google Calendar, and most major CRMs. If you're using something specific, we'll tell you upfront whether it works." },
      { q: 'How quickly does response time actually drop?', a: "From the day the system goes live. We've seen response time go from 3–5 hours to under 60 seconds — which has a measurable impact on conversion, especially for emergency and after-hours calls." },
      { q: "What's the booking success rate like?", a: "It depends on your business and lead quality, but systems we build typically show a 25–40% lift in booked appointments from the same lead volume. The biggest driver is speed — you're reaching leads before they call someone else." },
    ],
    calLink: 'devxai/30min',
    ctaOfferTitle: 'Start with a free lead flow consultation.',
    ctaOfferDesc:
      "A 30-minute call where we map out where your leads are coming from, where they're falling off, and what a system that books automatically would look like for your business. No pitch. No generic demo.",
    ctaOfferBadges: ['30 minutes', 'Custom lead flow analysis', 'No obligation'],
    ctaButtonText: 'Book My Free Consultation →',
    nicheCallouts: {
      hvac: "A homeowner whose AC breaks at 9pm calls whoever answers. We build the system that responds in seconds — even when you're off the clock.",
      roofing: "Storm season generates a flood of leads. We build the system that captures them all, responds instantly, and books before your competitor does.",
      plumbing: "A burst pipe at midnight can't wait until morning. We build the after-hours response system that captures the emergency, responds instantly, and books the job.",
      cleaning: "New clients expect a fast response. We build the lead capture and booking system that responds instantly and gets them scheduled — without back-and-forth emails.",
    },
  },
  {
    slug: 'website-seo',
    name: 'Website Development + SEO',
    descriptor: 'A website built to rank locally and convert visitors into calls.',
    whatItIs:
      "Most trades websites are digital business cards — they exist but they don't work. We build websites specifically for trades businesses that are designed to rank in local search, load fast on mobile, and convert the visitor who just found you on Google into a booked call. Not a template. Not a page builder. A real website built around how customers actually search for and choose a trades company.",
    heroSubline: 'missing out on local search traffic — and builds a site that ranks and converts',
    deliverables: [
      { title: 'Discovery and sitemap', desc: 'We learn how your customers find you and design a site structure that supports local ranking and conversion.' },
      { title: 'Design and copy', desc: 'A full site design and copywritten pages — no lorem ipsum, no placeholder content. Written for your trade and your city.' },
      { title: 'Custom development', desc: 'Built in code, not a page builder. Fast-loading, mobile-first, and designed to convert.' },
      { title: 'Local SEO setup', desc: 'On-page SEO, technical SEO, and local keyword targeting for your service areas and trade.' },
      { title: 'Google Business optimization', desc: 'A fully optimized Google Business Profile — the #1 driver of local service calls.' },
      { title: 'Speed optimization', desc: 'Performance-tuned to load fast on mobile — because most of your customers are searching on their phone.' },
      { title: 'Launch and 60-day SEO report', desc: 'We launch the site and deliver a 60-day performance report showing rankings, traffic, and conversion benchmarks.' },
    ],
    process: [
      { num: '01', title: 'Discovery and Strategy', desc: 'We learn your business, your service area, and how your customers find you. We map the site structure and keyword strategy before a single pixel is designed.' },
      { num: '02', title: 'Design and Copy', desc: 'We design the site and write every page. You approve the direction before we build.' },
      { num: '03', title: 'Build and Optimize', desc: 'We build in code, optimize for speed, and set up every SEO element before launch.' },
      { num: '04', title: 'Launch and Track', desc: 'We launch the site, set up tracking, and deliver a 60-day report showing how it\'s performing.' },
    ],
    outcome:
      'A website that ranks for the searches that matter, loads in under 2 seconds on mobile, and converts visitors into booked calls — not just traffic that bounces.',
    packages: [
      {
        tier: '01',
        name: 'Site Refresh',
        label: 'Starter',
        includes: [
          'Redesign of existing site with modern structure',
          'Up to 5 pages fully copywritten',
          'Local SEO fundamentals',
          'Mobile-first responsive design',
          'Google Business Profile optimization',
          'Launch and handoff',
        ],
      },
      {
        tier: '02',
        name: 'New Site Build',
        label: 'Core',
        featured: true,
        includes: [
          'Full custom site from ground up',
          'Up to 10 pages — all copywritten',
          'Full local SEO setup with keyword research',
          'Google Business Profile optimization',
          'Speed optimization and Core Web Vitals',
          'Launch and 60-day SEO performance report',
        ],
      },
      {
        tier: '03',
        name: 'Site + Authority',
        label: 'Premium',
        includes: [
          'Everything in New Site Build',
          'Ongoing monthly SEO — blog posts, citations, link building',
          'Monthly performance report',
          'Google Ads setup and management',
          'Competitor ranking analysis',
          'Quarterly strategy call',
        ],
      },
    ],
    faq: [
      { q: 'How long does it take to build the site?', a: "A Site Refresh takes 2–3 weeks. A New Site Build typically takes 3–5 weeks from kickoff to launch, depending on how many pages and how quickly we can get your input on content and design." },
      { q: 'How long until we see SEO results?', a: "Local SEO typically shows movement in 60–90 days. Some businesses see ranking improvements within the first month, others take a bit longer depending on competition. We set realistic expectations upfront based on your market." },
      { q: 'Do you write all the copy?', a: "Yes. Every page, every headline, every service description — written by us, in your voice, for your trade and your city. You'll review and approve before anything goes live." },
      { q: 'Can you work with our current domain?', a: "Yes. We can build on your existing domain. If you want to change domains, we can handle that too — including all redirects so you don't lose existing traffic." },
      { q: 'Do we need to manage the site after launch?', a: "No. We hand off the site with full documentation and can provide ongoing hosting and maintenance. If you want changes after launch, we can handle those too." },
      { q: 'How is this different from a template or WordPress site?', a: "Template and page builder sites load slowly, rank poorly, and look generic — which tells search engines and customers the same thing. We build in code, specifically for trades, with conversion and local ranking as the priority from day one." },
    ],
    calLink: 'devxai/30min',
    ctaOfferTitle: 'Start with a free website and SEO consultation.',
    ctaOfferDesc:
      "A 30-minute call where we look at your current website, your local search presence, and your competitors — and show you specifically what's costing you traffic and calls right now. No generic audit tool. An actual conversation.",
    ctaOfferBadges: ['30 minutes', 'Site and SEO review', 'No obligation'],
    ctaButtonText: 'Book My Free Consultation →',
    nicheCallouts: {
      hvac: "When a homeowner needs HVAC service, they search Google first. We build the website that shows up — and converts the visitor into a booked call.",
      roofing: "Homeowners finding roofers after a storm are searching right now. We build the site that ranks for those searches and turns traffic into estimates requested.",
      plumbing: "Emergency plumbing searches have high intent and zero patience. We build the site that shows up for your city's top searches and converts the click into a call.",
      cleaning: "Cleaning clients search locally and compare before booking. We build the site that ranks in your city and makes you the obvious choice.",
    },
  },
  {
    slug: 'ai-agents',
    name: 'AI Agents',
    descriptor: 'Custom AI agents that handle real business tasks — around the clock.',
    whatItIs:
      "AI agents are different from automations. An automation runs a fixed set of steps when triggered. An AI agent can have a conversation, make decisions, answer questions, qualify leads, and handle exceptions — without a human. We build custom agents for trades businesses that handle customer-facing and internal tasks around the clock, escalating to your team only when a human is actually needed.",
    heroSubline: 'handling tasks manually — and deploys AI agents that do it automatically, around the clock',
    deliverables: [
      { title: 'Use case scoping', desc: "We identify which tasks are best suited for an AI agent and define exactly what the agent will and won't handle." },
      { title: 'Agent design', desc: "We design the agent's logic, conversation flows, escalation paths, and fallback behavior." },
      { title: 'Build and training', desc: 'We build the agent and train it on your business — your services, your pricing structure, your FAQs, your voice.' },
      { title: 'Tool integration', desc: 'We connect the agent to your existing tools — CRM, calendar, communication platforms — so it can take real action.' },
      { title: 'Testing and QA', desc: 'We run the agent through hundreds of scenarios before it goes live — including edge cases and difficult conversations.' },
      { title: 'Deployment and monitoring', desc: "We deploy the agent and monitor its performance — response quality, escalation rate, and customer satisfaction." },
    ],
    process: [
      { num: '01', title: 'Define Use Cases', desc: "We identify which customer-facing and internal tasks would benefit most from an AI agent, and scope exactly what the agent handles and when it escalates." },
      { num: '02', title: 'Design and Train Agent', desc: "We design the agent's logic and train it on your business — your services, your voice, your FAQs, and your specific workflows." },
      { num: '03', title: 'Integrate and Test', desc: 'We connect the agent to your existing tools and run it through hundreds of test scenarios before it touches a real customer.' },
      { num: '04', title: 'Deploy and Monitor', desc: 'We deploy the agent and monitor performance — tracking response quality, escalation rate, and customer outcomes.' },
    ],
    outcome:
      "Customer-facing inquiries answered instantly, around the clock. Leads qualified and appointments booked without a human in the loop. Your team focused on the work that requires a human — not the repetitive communication that doesn't.",
    packages: [
      {
        tier: '01',
        name: 'Single Agent Deploy',
        label: 'Starter',
        includes: [
          'One focused AI agent for a specific use case (e.g. after-hours chat, lead qualification)',
          'Agent design, build, and training',
          'Integration with one external tool',
          'Testing and launch',
          '30-day monitoring',
        ],
      },
      {
        tier: '02',
        name: 'Multi-Agent System',
        label: 'Core',
        featured: true,
        includes: [
          '2–3 AI agents covering different parts of your operation',
          'Full use case scoping and agent design',
          'Multi-tool integration',
          'Testing and QA across all agents',
          'Launch and 30-day monitoring',
          'Staff walkthrough and documentation',
        ],
      },
      {
        tier: '03',
        name: 'Full Agent Stack',
        label: 'Premium',
        includes: [
          'Comprehensive AI agent infrastructure across the operation',
          'Customer-facing agents (chat, SMS, email) + internal agents (dispatch, scheduling support)',
          'Full tool integration with CRM, calendar, and communication platforms',
          'Advanced training on your business, voice, and workflows',
          'Ongoing monitoring and agent improvement',
          'Monthly performance review',
        ],
      },
    ],
    faq: [
      { q: "What's the difference between an AI agent and a chatbot?", a: "A chatbot follows a script. An AI agent can understand context, handle unexpected questions, make decisions, and take actions — like booking an appointment or looking up information. The experience for the customer is completely different." },
      { q: 'Can the agent actually book appointments?', a: "Yes. We integrate the agent directly with your scheduling system. A customer can go from \"I need a quote\" to \"booked for Tuesday at 10am\" in a single conversation — without anyone on your team being involved." },
      { q: "What happens when the agent can't answer something?", a: "We design clear escalation paths. When the agent encounters something outside its scope, it collects the information and routes the conversation to a human — with full context. Nothing falls through the cracks." },
      { q: 'How does the agent learn about our business?', a: "We train the agent on your specific services, service areas, pricing, FAQs, and communication style. Before launch, we test every scenario to ensure the agent represents your business accurately — and we update the training as your business changes." },
      { q: 'What does it cost to build an AI agent?', a: "It depends on the complexity of the use case and the number of tool integrations required. A single-focus agent is significantly less expensive than a multi-tool agent handling full customer interactions. We scope and price every engagement after the initial consultation — so you know the number before you commit." },
      { q: 'What channels can the agent work on?', a: "We build agents for web chat, SMS, email, and inbound call handling. Most trades businesses benefit most from web chat and SMS — that's where customer inquiries actually come from. We recommend the right channel based on how your customers prefer to communicate." },
    ],
    calLink: 'devxai/30min',
    ctaOfferTitle: 'Start with a free AI agent consultation.',
    ctaOfferDesc:
      "A 30-minute call where we define which tasks are best handled by an AI agent in your business, what that agent would do, and what it would cost to build and deploy. No demo. No pitch. Just a clear picture of what's possible and what it takes.",
    ctaOfferBadges: ['30 minutes', 'Custom agent scoping', 'No obligation'],
    ctaButtonText: 'Book My Free Consultation →',
    nicheCallouts: {
      hvac: "Your customers call at all hours. We build the AI agent that answers after-hours inquiries, qualifies the job, and books the appointment — so no lead goes unanswered.",
      roofing: "Storm-season lead volume is unpredictable. We build the AI agent that handles first contact, qualifies the lead, and starts the booking process — without overwhelming your team.",
      plumbing: "Emergency calls at 11pm shouldn't go to voicemail. We build the AI agent that responds in seconds, captures the job details, and routes the emergency to an on-call tech.",
      cleaning: "New client onboarding and recurring booking questions can be fully handled by AI. We build the agent that books the first clean and answers FAQ — without a single email from your team.",
    },
  },
]

export function getNiche(slug: string): NicheData | undefined {
  return niches.find(n => n.slug === slug)
}

export function getService(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug)
}
