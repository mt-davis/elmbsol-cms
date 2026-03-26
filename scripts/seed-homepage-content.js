/* eslint-disable no-console */
require('esbuild-register/dist/node').register({
  extensions: ['.js', '.ts'],
})

const path = require('path')
const { createStrapi } = require('@strapi/strapi')

const siteSettingUid = 'api::site-setting.site-setting'
const homePageUid = 'api::home-page.home-page'
const serviceUid = 'api::service.service'
const partnerTypeUid = 'api::partner-type.partner-type'
const approachStepUid = 'api::approach-step.approach-step'
const caseStudyUid = 'api::case-study.case-study'

const publishedAt = new Date()

const siteSettingData = {
  siteName: 'Elm Business Solutions',
  siteUrl: 'https://elmbsol.com',
  tagline:
    'A boutique consulting partner specializing in healthcare platform modernization—bridging executive strategy with rapid technical execution.',
  contactEmail: 'contracts@elmbsol.com',
  contactPhone: '203-589-9887',
  location: 'Middletown, Connecticut',
  contactCtaLabel: 'Contact the Firm',
  contactCtaUrl: 'mailto:contracts@elmbsol.com',
  privacyUrl: '/privacy',
  termsUrl: '/terms',
  capabilityStatementUrl: '/capability-statement.pdf',
  primaryNavigation: [
    { label: 'Services', url: '#services', openInNewTab: false },
    { label: 'About', url: '#about', openInNewTab: false },
    { label: 'Approach', url: '#approach', openInNewTab: false },
    { label: 'Contact', url: '#contact', openInNewTab: false },
  ],
  footerNavigation: [
    { label: 'Services', url: '#services', openInNewTab: false },
    { label: 'Capability Statement', url: '/capability-statement.pdf', openInNewTab: false },
    { label: 'Contact', url: '#contact', openInNewTab: false },
  ],
  legalNavigation: [
    { label: 'Privacy', url: '/privacy', openInNewTab: false },
    { label: 'Terms', url: '/terms', openInNewTab: false },
  ],
  footerCopyright: 'Elm Business Solutions LLC. All rights reserved.',
  seo: {
    metaTitle: 'Healthcare & Cloud Modernization Partner | Elm Business Solutions',
    metaDescription:
      'A boutique consulting partner specializing in healthcare platform modernization—bridging executive strategy with rapid technical execution. AWS architecture, data pipelines, and delivery oversight.',
    keywords: 'healthcare modernization, AWS architecture, cloud strategy, healthcare consulting, data pipelines',
    canonicalUrl: 'https://elmbsol.com',
    metaRobots: 'index,follow',
    ogTitle: 'Elm Business Solutions | Healthcare & Cloud Modernization',
    ogDescription:
      'Boutique consulting for healthcare platform modernization, AWS architecture, and disciplined delivery.',
    twitterTitle: 'Elm Business Solutions | Healthcare & Cloud Modernization',
    twitterDescription:
      'Boutique consulting for healthcare platform modernization, AWS architecture, and disciplined delivery.',
  },
  seoTitle: 'Healthcare & Cloud Modernization Partner | Elm Business Solutions',
  seoDescription:
    'A boutique consulting partner specializing in healthcare platform modernization—bridging executive strategy with rapid technical execution. AWS architecture, data pipelines, and delivery oversight.',
}

const homePageData = {
  eyebrow: 'Healthcare · Cloud · Data · Delivery',
  title: 'Healthcare platform modernization strategy to execution.',
  subtitle:
    'A boutique consulting partner specializing in healthcare platform modernization—bridging executive strategy with rapid technical execution for organizations, system integrators, and government agencies.',
  primaryCtaLabel: 'Schedule a Conversation',
  primaryCtaUrl: '#contact',
  secondaryCtaLabel: 'View Services',
  secondaryCtaUrl: '#services',
  seo: {
    metaTitle: 'Healthcare & Cloud Modernization Partner | Elm Business Solutions',
    metaDescription:
      'A boutique consulting partner specializing in healthcare platform modernization—bridging executive strategy with rapid technical execution for organizations, system integrators, and government agencies.',
    keywords: 'healthcare platform modernization, AWS architecture, advisory, delivery oversight',
    canonicalUrl: 'https://elmbsol.com',
    metaRobots: 'index,follow',
    ogTitle: 'Elm Business Solutions | Healthcare Platform Modernization',
    ogDescription:
      'Healthcare platform modernization strategy, AWS architecture, data pipelines, and disciplined execution support.',
    twitterTitle: 'Elm Business Solutions | Healthcare Platform Modernization',
    twitterDescription:
      'Healthcare platform modernization strategy, AWS architecture, data pipelines, and disciplined execution support.',
  },
  focusHeading: 'Focused support where execution matters most',
  focusBestFitLabel: 'Best fit:',
  focusBestFitValue: 'Prime and enterprise teams',
  bestFitSummary:
    'Best fit for organizations that need a senior-level partner who can bridge strategy, architecture, and delivery without adding unnecessary complexity.',
  servicesHeading: 'Specialized support for modernization initiatives that cannot afford drift.',
  servicesBody:
    'Elm Business Solutions focuses on high-value areas where clarity, architecture, and execution discipline matter most.',
  partnerTypesHeading: 'Built to support prime contractors and enterprise teams.',
  partnerTypesBody:
    'We provide independent support to consulting firms, healthcare organizations, and public sector teams—delivering specialized expertise within larger transformation initiatives without affiliation or endorsement.',
  aboutHeading: 'A firm built to bridge executive strategy and technical execution.',
  aboutBody: [
    'Elm Business Solutions was built for organizations navigating complex platform transformation, especially in healthcare and regulated environments.',
    'The firm combines senior-level business insight with practical delivery support to help teams move faster, reduce risk, and make better technology decisions.',
    '',
    'Whether supporting a direct client or serving as a subcontractor to a larger consulting partner, the focus stays the same: clear requirements, sound architecture, accountable delivery, and measurable outcomes.',
  ].join('\n'),
  approachHeading: 'A simple operating model built for clarity and momentum.',
  contactHeading: 'Looking for a focused modernization partner?',
  contactBody:
    'Whether you need a strategic advisor, a delivery partner, or specialized subcontracting support, Elm Business Solutions is built to plug into complex initiatives and help move them forward.',
  contactDisclaimer:
    'Services available for independent engagements and subcontracting support. Elm Business Solutions operates as an independent entity and is not affiliated with any specific consulting firm or vendor.',
  capabilityStatementHeading: 'Built for prime contractors and enterprise engagements.',
  capabilityStatementBody:
    'Elm Business Solutions is structured to support large-scale initiatives as an independent subcontracting partner, providing specialized expertise in healthcare systems, cloud architecture, and data-driven delivery.',
  capabilityCtaLabel: 'Download Capability Statement (PDF)',
  heroMetrics: [
    {
      eyebrow: 'Experience',
      value: '20+ Years',
      description: 'Healthcare & Systems Integration',
    },
    {
      eyebrow: 'Architecture',
      value: 'AWS',
      description: 'Serverless-First Architecture',
    },
    {
      eyebrow: 'Domain',
      value: 'Healthcare',
      description: 'Modernization Expertise',
    },
  ],
  focusOutcomes: [
    { text: 'Clarify the roadmap before delivery begins' },
    { text: 'Reduce project risk through stronger architecture and documentation' },
    { text: 'Accelerate execution with focused, subcontractor-ready support' },
    { text: 'Align technology decisions to measurable business outcomes' },
  ],
  valueProps: [
    {
      title: 'Roadmap clarity',
      description: 'Clarify the roadmap before delivery begins.',
    },
    {
      title: 'Risk reduction',
      description: 'Reduce project risk through stronger architecture and documentation.',
    },
    {
      title: 'Execution speed',
      description: 'Accelerate execution with focused, subcontractor-ready support.',
    },
    {
      title: 'Outcome alignment',
      description: 'Align technology decisions to measurable business outcomes.',
    },
  ],
  whyClientsBringUsIn: [
    { text: '20+ years of technology leadership in healthcare and public-sector environments' },
    { text: 'Deep experience with ACA, enrollment, eligibility, and consumer experience modernization' },
    { text: 'Executive-level communication with practical delivery discipline' },
    {
      text: 'A strategy-to-execution model designed to support primes, agencies, and transformation teams',
    },
  ],
  capabilityHighlights: [
    {
      title: 'Core Capabilities',
      description:
        'Healthcare platform modernization, AWS architecture, data pipelines, analytics, and delivery oversight.',
    },
    {
      title: 'Engagement Model',
      description:
        'Flexible subcontracting, project-based delivery, and integration into prime contractor teams.',
    },
    {
      title: 'Value',
      description:
        'Reduce delivery risk, accelerate timelines, and provide senior-level execution without added overhead.',
    },
  ],
}

const services = [
  {
    title: 'Healthcare Platform Modernization',
    slug: 'healthcare-platform-modernization',
    summary:
      'Modernize enrollment, eligibility, and consumer-facing platforms with a practical roadmap that balances speed, compliance, and long-term scalability.',
    description: [
      'Modernize enrollment, eligibility, and consumer-facing platforms with a practical roadmap that balances speed, compliance, and long-term scalability.',
      'We help teams clarify target-state architecture, sequence delivery milestones, and reduce execution risk across modernization initiatives in healthcare and regulated environments.',
    ].join('\n\n'),
    sortOrder: 1,
    featured: true,
  },
  {
    title: 'AWS Architecture & Cloud Strategy',
    slug: 'aws-architecture-cloud-strategy',
    summary:
      'Design secure, scalable, serverless-first solutions for healthcare and regulated environments, with clear architecture and cost-conscious implementation.',
    description: [
      'Design secure, scalable, serverless-first solutions for healthcare and regulated environments, with clear architecture and cost-conscious implementation.',
      'Our work spans reference architecture, workload decomposition, integration design, and delivery-ready technical guidance that helps teams move with confidence.',
    ].join('\n\n'),
    sortOrder: 2,
    featured: true,
  },
  {
    title: 'Data Pipelines & Analytics',
    slug: 'data-pipelines-analytics',
    summary:
      'Build reliable data pipelines, dashboards, and decision-ready reporting that improve visibility, reduce operational friction, and support better business outcomes.',
    description: [
      'Build reliable data pipelines, dashboards, and decision-ready reporting that improve visibility, reduce operational friction, and support better business outcomes.',
      'We focus on trustworthy data flow, reporting clarity, and analytics foundations that support operational performance and executive decision-making.',
    ].join('\n\n'),
    sortOrder: 3,
    featured: true,
  },
  {
    title: 'Advisory & Delivery Oversight',
    slug: 'advisory-delivery-oversight',
    summary:
      'Strengthen execution through vendor governance, outcome-based delivery, technical leadership, and documentation that keeps initiatives aligned and moving.',
    description: [
      'Strengthen execution through vendor governance, outcome-based delivery, technical leadership, and documentation that keeps initiatives aligned and moving.',
      'This support is designed for transformation efforts that need senior guidance, clearer decision-making, and steady momentum across stakeholders and delivery teams.',
    ].join('\n\n'),
    sortOrder: 4,
    featured: true,
  },
]

const partnerTypes = [
  {
    title: 'Consulting Firms & System Integrators',
    description: 'Consulting firms and systems integration partners delivering transformation work.',
    examples: 'e.g., Guidehouse, Accenture, Slalom',
    sortOrder: 1,
  },
  {
    title: 'Healthcare Organizations & Exchanges',
    description: 'Healthcare organizations and exchange teams navigating complex modernization efforts.',
    sortOrder: 2,
  },
  {
    title: 'State & Government Agencies',
    description: 'State and government agencies balancing policy goals with delivery execution.',
    sortOrder: 3,
  },
]

const approachSteps = [
  {
    stepNumber: 1,
    title: 'Define',
    description:
      'Clarify the business problem, desired outcomes, risks, and delivery priorities through focused discovery and strong documentation.',
    sortOrder: 1,
  },
  {
    stepNumber: 2,
    title: 'Design',
    description:
      'Create the product, technical, and data blueprint needed to support confident execution, stakeholder alignment, and scalable implementation.',
    sortOrder: 2,
  },
  {
    stepNumber: 3,
    title: 'Deliver',
    description:
      'Support delivery with architecture guidance, oversight, and practical execution support that helps teams move with less friction.',
    sortOrder: 3,
  },
]

const caseStudies = [
  {
    title: 'Accelerating a state-based healthcare platform modernization initiative',
    slug: 'state-based-healthcare-platform-modernization',
    summary: 'Modernizing a healthcare exchange with stronger architecture and delivery governance.',
    challenge:
      'Legacy enrollment systems created delays, data inconsistencies, and limited scalability for a state healthcare exchange.',
    approach:
      'Defined a modernization roadmap, designed AWS-based architecture, and introduced structured delivery oversight.',
    outcome:
      'Improved delivery timelines, strengthened data integrity, and enabled scalable platform growth aligned to business needs.',
    industry: 'Healthcare',
    featured: true,
  },
]

function toArray(result) {
  if (!result) {
    return []
  }

  return Array.isArray(result) ? result : [result]
}

async function replaceCollection(strapi, uid, entries) {
  const existingEntries = toArray(await strapi.entityService.findMany(uid, { fields: ['id'] }))

  for (const entry of existingEntries) {
    await strapi.entityService.delete(uid, entry.id)
  }

  for (const entry of entries) {
    await strapi.entityService.create(uid, {
      data: {
        ...entry,
        publishedAt,
      },
    })
  }
}

async function upsertSingleType(strapi, uid, data) {
  const existingEntry = toArray(await strapi.entityService.findMany(uid, { fields: ['id'] }))[0]

  if (existingEntry?.id) {
    return strapi.entityService.update(uid, existingEntry.id, {
      data: {
        ...data,
        publishedAt,
      },
    })
  }

  return strapi.entityService.create(uid, {
    data: {
      ...data,
      publishedAt,
    },
  })
}

async function main() {
  const strapi = createStrapi({
    appDir: process.cwd(),
    distDir: path.join(process.cwd(), 'dist'),
  })

  await strapi.load()

  try {
    await upsertSingleType(strapi, siteSettingUid, siteSettingData)
    await upsertSingleType(strapi, homePageUid, homePageData)
    await replaceCollection(strapi, serviceUid, services)
    await replaceCollection(strapi, partnerTypeUid, partnerTypes)
    await replaceCollection(strapi, approachStepUid, approachSteps)
    await replaceCollection(strapi, caseStudyUid, caseStudies)

    console.log('Seeded Elm Business Solutions homepage content successfully.')
  } finally {
    await strapi.destroy()
  }
}

main().catch((error) => {
  console.error('Unable to seed homepage content.')
  console.error(error)
  process.exit(1)
})
