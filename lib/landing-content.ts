export const NICHE_SLUGS = ['hvac', 'roofing', 'plumbing', 'cleaning'] as const
export const SERVICE_SLUGS = ['website-design', 'local-seo', 'workflow-automation', 'voice-agent'] as const
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
      'Four systems that keep HVAC crews booked — from the website that wins local search to the agent that answers when your techs are on a call.',
    serviceTitles: {
      'website-design': 'HVAC Website Design',
      'local-seo': 'Local SEO for HVAC',
      'workflow-automation': 'Quote Follow-up Automation',
      'voice-agent': 'After-hours Voice Agent',
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
      'Four systems that plug the leaks in your pipeline — from the website that wins the storm search to the agent that answers while your crew is on a roof.',
    serviceTitles: {
      'website-design': 'Roofing Website Design',
      'local-seo': 'Local SEO for Roofers',
      'workflow-automation': 'Estimate Follow-up Automation',
      'voice-agent': 'After-hours Voice Agent',
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
      'Four systems that keep the calls coming and the schedule full — from instant emergency response to bringing past customers back.',
    serviceTitles: {
      'website-design': 'Plumbing Website Design',
      'local-seo': 'Local SEO for Plumbers',
      'workflow-automation': 'Re-engagement & Invoice Automation',
      'voice-agent': 'Emergency Voice Agent',
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
      'Four systems that keep recurring clients on the schedule — from automated bookings and reviews to win-backs that stop churn.',
    serviceTitles: {
      'website-design': 'Cleaning Website Design',
      'local-seo': 'Local SEO for Cleaners',
      'workflow-automation': 'Retention & Review Automation',
      'voice-agent': 'Booking Voice Agent',
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
    slug: 'website-design',
    name: 'Website Design & Development',
    descriptor: 'A fast, professional website designed to turn visitors into booked jobs.',
    whatItIs:
      "Most contractor websites are just digital business cards — they look okay, but they don't bring in jobs. We build custom trades websites from scratch. No templates, no slow page builders. Every page is hand-coded to load instantly on mobile, optimized to rank at the top of Google search results, and integrated with booking tools like Jobber, Housecall Pro, or ServiceTitan so customers can book immediately.",
    heroSubline: 'missing out on booked jobs — and builds a custom, high-speed website that converts',
    deliverables: [
      { title: 'Custom sitemap & structure', desc: 'Designed for trades to lead homeowners directly to calling or booking a job.' },
      { title: 'Professional copy & design', desc: 'No placeholder text. We write every headline and description tailored to your city and service.' },
      { title: 'Hand-coded development', desc: 'Built for speed, scoring 95+ on Google Mobile PageSpeed audits.' },
      { title: 'Google Search Console setup', desc: 'Full setup and indexing so Google knows exactly what services you offer and where.' },
      { title: 'Booking tool integrations', desc: 'Direct sync with Jobber, ServiceTitan, Housecall Pro, or online schedulers.' },
      { title: 'Performance optimization', desc: 'Tuned to load under 1.5 seconds on a phone on LTE.' },
      { title: 'Launch & sitemap submission', desc: 'We handle host migration, domain mapping, and submit your new sitemap to Google.' },
    ],
    process: [
      { num: '01', title: 'Plan & Wireframe', desc: 'We map out the pages, structure, and conversion path before writing any code.' },
      { num: '02', title: 'Design & Copywriting', desc: 'We design the interface and write all of your pages to sound professional and clear.' },
      { num: '03', title: 'Develop & Integrate', desc: 'We code the site, optimize performance, and connect it with your booking system.' },
      { num: '04', title: 'Launch & Track', desc: 'We go live, map the domain, and submit the site to Google for indexing.' },
    ],
    outcome:
      "A high-speed, professional website that ranks locally and converts searchers into booked calls.",
    packages: [
      {
        tier: '01',
        name: 'Website Refresh',
        label: 'Starter',
        includes: [
          'Redesign of existing site with modern structure',
          'Up to 5 pages copywritten',
          'Local SEO fundamentals',
          'Mobile-responsive layouts',
          'Booking tool integration',
          'Launch and sitemap submission',
        ],
      },
      {
        tier: '02',
        name: 'Custom Site Build',
        label: 'Core',
        featured: true,
        includes: [
          'Full custom site from the ground up',
          'Up to 10 pages — all copywritten',
          'Technical SEO setup & schema markup',
          'Core Web Vitals optimization',
          'Booking tool integration',
          'Launch and sitemap submission',
        ],
      },
      {
        tier: '03',
        name: 'Site + Authority Suite',
        label: 'Premium',
        includes: [
          'Everything in the Custom Site Build',
          'Ongoing monthly SEO optimizations',
          'Monthly performance reports',
          'Google Ads setup & landing page templates',
          'Quarterly optimization strategy call',
        ],
      },
    ],
    faq: [
      { q: 'How long does it take to build?', a: "A custom site refresh takes 2 to 3 weeks. A complete custom site build from scratch typically takes 3 to 5 weeks depending on how quickly we receive your input." },
      { q: 'Do we own the website after launch?', a: "Yes. You own 100% of the site, code, and content. Unlike other agencies, we don't lock you into mandatory licensing fees or own your domain." },
      { q: 'Do you write the copy?', a: "Yes. Every page, headline, and service description is fully copywritten by our team in a clean, professional voice." },
      { q: 'Will it work with Jobber or ServiceTitan?', a: "Yes. We build forms and booking widgets that embed directly, sending lead details straight into your field service management tool." },
    ],
    calLink: 'swiftbuild/free-strategy-call',
    ctaOfferTitle: 'Get a free website audit report.',
    ctaOfferDesc:
      "We'll audit your current website, check your mobile load speed, analyze your booking flows, and show you exactly where you're losing customers. No pitch, no obligation.",
    ctaOfferBadges: ['Speed check', 'Conversion review', 'Free report'],
    ctaButtonText: 'Book My Free Audit Call →',
    nicheCallouts: {
      hvac: "When a homeowner needs AC or furnace service, they search Google first. We make sure you show up at the top of local listings.",
      roofing: "Storm damage searches are highly local. We get your business ranked so homeowners call you first.",
      plumbing: "Plumbing emergencies are immediate. We get you ranked in the local map pack so you're the first call.",
      cleaning: "Local cleaning clients search and compare reviews. We optimize your profiles to stand out.",
    },
  },
  {
    slug: 'local-seo',
    name: 'Local SEO & Search Visibility',
    descriptor: 'A local search presence that gets you found when homeowners search locally.',
    whatItIs:
      "Local SEO isn't about ranking globally; it's about being visible where your customers are looking. We manage your Google Business Profile, target local keywords, build local citations, and execute a review generation strategy to rank your business in the Google Maps Local 3-Pack — where the majority of service calls originate.",
    heroSubline: 'missing out on local search traffic — and builds a presence that ranks at the top',
    deliverables: [
      { title: 'Google Business Profile audit', desc: 'Complete optimization of your GBP including category selection, descriptions, and photo tagging.' },
      { title: 'Local keyword targeting', desc: 'In-depth research of high-intent search terms (e.g. "roofer near me", "AC repair Mississauga").' },
      { title: 'Local citation building', desc: 'Syncing your business details across 50+ directory sites to build local authority.' },
      { title: 'Review generation setup', desc: 'Setting up automated SMS and email review triggers to build trust fast.' },
      { title: 'Local landing page optimization', desc: 'Optimizing your website pages to target specific cities and regions.' },
      { title: 'Competitor ranking tracking', desc: 'We monitor your local map pack competitors and target their weak spots.' },
      { title: 'Monthly visibility report', desc: 'Clear reports showing search impressions, phone call clicks, and map views.' },
    ],
    process: [
      { num: '01', title: 'Audit & Map keywords', desc: 'We analyze your local competitors and identify high-volume keywords in your service area.' },
      { num: '02', title: 'Optimize Listings', desc: 'We fix and polish your Google Business Profile, directories, and business details.' },
      { num: '03', title: 'Set Up Review Engines', desc: 'We configure review request automations to systematically ask happy customers for Google reviews.' },
      { num: '04', title: 'Track & Scale', desc: 'We monitor your positions on local grids and adjust citations to expand your search radius.' },
    ],
    outcome:
      "Top ranks in Google Maps, more direct phone calls from local homeowners, and steady organic lead generation.",
    packages: [
      {
        tier: '01',
        name: 'GBP Jumpstart',
        label: 'Starter',
        includes: [
          'Google Business Profile audit & cleanup',
          'Category & photo optimization',
          'Top 5 local keyword targets',
          'Basic directory submissions',
        ],
      },
      {
        tier: '02',
        name: 'Local Domination',
        label: 'Core',
        featured: true,
        includes: [
          'Full Google Business Profile management',
          'Ongoing local citation building',
          'Review automation templates',
          'Competitor keyword tracking',
          'Monthly visibility reports',
        ],
      },
      {
        tier: '03',
        name: 'Multi-Location Domination',
        label: 'Premium',
        includes: [
          'Everything in Local Domination',
          'Optimized multi-city landing pages',
          'Advanced local link building',
          'Review response management',
          'Quarterly strategy meetings',
        ],
      },
    ],
    faq: [
      { q: 'How long until we see SEO results?', a: "Local search moves faster than global SEO. You will typically see improvements in Google Maps visibility in 30 to 60 days, with calls increasing as you collect more reviews." },
      { q: 'What is the Local 3-Pack?', a: "It is the group of three businesses displayed directly underneath the map in a Google search. This block gets over 50% of all local search clicks." },
      { q: 'Do you guarantee number 1 rankings?', a: "No honest agency can guarantee #1 rankings due to search engine algorithm updates, but we guarantee our optimization methods will improve your search views." },
      { q: 'Do we need to write blog posts?', a: "No. For trades, localized landing pages, review frequency, and directory consistency drive local search rankings, not long blog posts." },
    ],
    calLink: 'swiftbuild/free-strategy-call',
    ctaOfferTitle: 'Get a free local search grid report.',
    ctaOfferDesc:
      "We will scan your service area and generate a heat map showing exactly where your business ranks in Google Maps compared to competitors. 100% free.",
    ctaOfferBadges: ['Ranking heat map', 'Competitor score', 'Visibility report'],
    ctaButtonText: 'Book My Free Ranking Scan →',
    nicheCallouts: {
      hvac: "Homeowners needing AC repair search on Google Maps. We rank you so you're the first pin they click.",
      roofing: "Storm damage search is highly local. We get your business ranked in local search to capture emergency repair calls.",
      plumbing: "Plumbing emergencies demand fast callbacks. We get you in the local 3-pack where people search and call immediately.",
      cleaning: "Local cleaning services compete on trust and reviews. We rank your profile and automate review collection.",
    },
  },
  {
    slug: 'workflow-automation',
    name: 'Workflow & Task Automation',
    descriptor: 'Stop doing the same things twice. Automate quote follow-ups, confirmations, and scheduling.',
    whatItIs:
      "Workflow Automation isn't about replacing your crew — it's about eliminating the daily manual tasks that eat your time. Quote follow-ups, review requests, booking confirmations, dispatch updates, invoice reminders, onboarding sequences — these should all run automatically. We build the secure connections between your tools (CRM, Calendly, email, text) so they sync and run on autopilot.",
    heroSubline: 'losing hours to manual admin work — and builds the systems that eliminate it',
    deliverables: [
      { title: 'Admin workflow analysis', desc: 'We map out your manual steps to target where your team is wasting time.' },
      { title: 'Automation blueprint', desc: 'Detailed plan of your triggers, filters, and data paths before we write any code.' },
      { title: 'n8n & Zapier pipeline builds', desc: 'We build robust integration webhooks to link your CRM, calendar, and email tools.' },
      { title: 'Quote follow-up flows', desc: 'Automated email and text sequences that follow up on estimates to close more jobs.' },
      { title: 'Review request triggers', desc: 'Direct review links sent to happy customers within minutes of job completion.' },
      { title: 'Office team live handover', desc: 'Onboarding training so your team knows how to monitor and adjust the flows.' },
      { title: '30-day technical support', desc: 'Active monitoring for 30 days after launch to ensure zero errors in sync.' },
    ],
    process: [
      { num: '01', title: 'Map Operations', desc: 'We trace your workflows from a homeowner calling to invoice payment to find manual bottlenecks.' },
      { num: '02', title: 'Design Automation Logic', desc: 'We map the database sync logic and draft notifications for your approval.' },
      { num: '03', title: 'Build & Test Pipelines', desc: 'We code the automations, connect your CRM/field tools, and run test scenarios.' },
      { num: '04', title: 'Onboard & Hand Over', desc: 'We train your team, hand over documentation, and run active monitoring.' },
    ],
    outcome:
      'Hours of manual administration saved every week. Quick quote follow-ups, review collection, and seamless client messaging.',
    packages: [
      {
        tier: '01',
        name: 'Automation Jumpstart',
        label: 'Starter',
        includes: [
          'Single high-impact workflow (e.g. quote follow-ups)',
          'n8n/Zapier pipeline configuration',
          'Testing and validation',
          'Office team walkthrough',
        ],
      },
      {
        tier: '02',
        name: 'Workflow Suite',
        label: 'Core',
        featured: true,
        includes: [
          'Operations workflow analysis',
          '3-5 custom automations (scheduling, reviews, sync)',
          'CRM & calendar integration setup',
          'Live walkthrough & video guides',
          '30-day active monitoring',
        ],
      },
      {
        tier: '03',
        name: 'Complete Ops Autopilot',
        label: 'Premium',
        includes: [
          'Everything in the Workflow Suite',
          'End-to-end multi-step workflow logic',
          'Advanced CRM custom field sync',
          'Monthly performance review and updates',
          'Ongoing automation support retainer',
        ],
      },
    ],
    faq: [
      { q: 'Do we need to change our current software?', a: "No. We build integrations that connect to the tools you already use — Jobber, ServiceTitan, Housecall Pro, Calendly, and standard CRMs. We add automation on top, saving you software migration costs." },
      { q: 'How long does it take to deploy?', a: "A single jumpstart workflow can be live within 5 days. A complete Workflow Suite typically takes 2 to 3 weeks depending on the number of tools integrated." },
      { q: 'What happens if a pipeline has an error?', a: "We build all automations with built-in error alert handlers. If a tool API fails or syncs incorrectly, we receive an alert and fix it immediately." },
      { q: 'Does this require my team to do things differently?', a: "No. The automations run in the background. Your team continues using your CRM or dispatch tool exactly as they do now, but without having to repeat tasks." },
    ],
    calLink: 'swiftbuild/free-strategy-call',
    ctaOfferTitle: 'Start with a free workflow consultation.',
    ctaOfferDesc:
      "A 30-minute workflow breakdown where we analyze your daily admin tasks and outline exactly which processes can be automated. No sales pitch, just practical advice.",
    ctaOfferBadges: ['30 minutes', 'Workflow mapping', 'Actionable advice'],
    ctaButtonText: 'Book My Free Consultation Call →',
    nicheCallouts: {
      hvac: "Quote follow-ups, review requests, appointment reminders — all automated in your CRM. We build the integrations so your team saves hours.",
      roofing: "Storm lead follow-ups, estimate reminders, subcontractor coordination — hours of manual work. We build the automations that handle it for you.",
      plumbing: "Invoice reminders, service plan renewals, re-engagement sequences — all manual. We build the workflows that run without your team.",
      cleaning: "Booking confirmations, review requests, re-engagement sequences, staff scheduling — all done by hand. We automate what should never have been manual.",
    },
  },
  {
    slug: 'voice-agent',
    name: 'Voice Agent & Booking',
    descriptor: 'An AI system that answers calls 24/7, qualifies leads, and books appointments.',
    whatItIs:
      "A voice agent is a smart, interactive AI system trained specifically on your trades business. Answering calls instantly 24/7, it goes beyond simple messaging. It handles customer FAQs, qualifies call urgency, syncs with your CRM calendar, and schedules jobs directly. Never miss an emergency lead again.",
    heroSubline: 'missing calls after hours — and deploys an AI voice system that answers, qualifies, and books',
    deliverables: [
      { title: 'Conversation mapping', desc: "We map out what questions the agent will answer, how it qualifies leads, and when it escalates to a human." },
      { title: 'Agent training', desc: "We train the voice model on your services, pricing guidelines, service areas, and company voice." },
      { title: 'CRM & calendar integration', desc: "Direct integration with Jobber, ServiceTitan, or Google Calendar to book appointments." },
      { title: 'Testing & QA scenarios', desc: "We run the voice agent through hundreds of mock test calls to ensure clean responses." },
      { title: 'Inbound call routing', desc: "Configuring call forwarding from your business line to ring the AI agent after hours or during overflows." },
      { title: 'Performance dashboard', desc: "Access to a dashboard where you can listen to call recordings, read transcripts, and track bookings." },
      { title: '30-day voice model tuning', desc: "We review call logs and adjust agent prompts daily during the first month to optimize accuracy." },
    ],
    process: [
      { num: '01', title: 'Define Scenarios', desc: "We map out your call scripts, pricing thresholds, service areas, and emergency triage rules." },
      { num: '02', title: 'Train Voice Model', desc: "We build and train the AI voice agent using real contractor scenarios and custom prompt engineering." },
      { num: '03', title: 'Connect CRM', desc: "We integrate the agent with your scheduling tools so it can check availability and create jobs." },
      { num: '04', title: 'Tweak & Launch', desc: "We run scenario testing, set up call forwarding, and monitor calls for the first 30 days." },
    ],
    outcome:
      "No missed emergency calls, qualified lead capture, and appointments booked automatically 24/7 without extra staff.",
    packages: [
      {
        tier: '01',
        name: 'Inbound Chat Agent',
        label: 'Starter',
        includes: [
          'Web chat & SMS AI agent',
          'Basic lead qualification script',
          'Calendar booking link integration',
          '30-day support & monitoring',
        ],
      },
      {
        tier: '02',
        name: 'Voice Booking Pilot',
        label: 'Core',
        featured: true,
        includes: [
          'Inbound voice agent with natural speech',
          'Custom script matching your services',
          'Direct CRM booking integration',
          'Triage protocol for emergency routing',
          '30-day voice model tuning',
        ],
      },
      {
        tier: '03',
        name: 'Enterprise Voice Engine',
        label: 'Premium',
        includes: [
          'Everything in the Voice Booking Pilot',
          'Multi-agent setups for distinct crews',
          'Custom phone number & voice selection',
          'Outbound booking follow-up calls',
          'Weekly log auditing & tuning',
        ],
      },
    ],
    faq: [
      { q: 'Does it sound natural?', a: "Yes. The agent uses state-of-the-art conversational AI models that sound highly realistic, with natural pauses and polite inflection." },
      { q: 'How does it book jobs?', a: "We link the agent with your calendar API (or Calendly/Jobber). The agent checks availability, presents open slots to the caller, and books the slot immediately." },
      { q: 'What happens in an actual emergency?', a: "We program strict triage rules. If a caller reports a burst pipe, severe storm damage, or a broken heater in sub-zero weather, the agent gathers details and routes the call to your on-call team." },
      { q: 'Can it handle accents or background noise?', a: "Yes. Our speech-to-text models are highly robust and easily filter out background noise or identify various accents." },
    ],
    calLink: 'swiftbuild/free-strategy-call',
    ctaOfferTitle: 'Hear a demo voice call.',
    ctaOfferDesc:
      "Leave your number and we'll have our AI agent call you immediately to demonstrate exactly how it handles booking a service job. No pitch, just a test call.",
    ctaOfferBadges: ['Instant test call', 'CRM booking demo', 'Voice quality check'],
    ctaButtonText: 'Schedule My Voice Demo Call →',
    nicheCallouts: {
      hvac: "Your customers call at all hours. We build the AI agent that answers after-hours inquiries, qualifies the job, and books the appointment — so no lead goes unanswered.",
      roofing: "Storm-season lead volume is unpredictable. We build the AI agent that handles first contact, qualifies the lead, and starts the booking process — without overwhelming your team.",
      plumbing: "Emergency calls at 11pm shouldn't go to voicemail. We build the AI agent that responds in seconds, captures the job details, and routes the emergency to an on-call tech.",
      cleaning: "New client onboarding and recurring booking questions can be fully handled by AI. We build the agent that books the first clean and answers FAQs — without a single email from your team.",
    },
  },
]

export function getNiche(slug: string): NicheData | undefined {
  return niches.find(n => n.slug === slug)
}

export function getService(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug)
}
