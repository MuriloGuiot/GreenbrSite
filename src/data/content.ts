/**
 * content.ts
 * ----------------------------------------------------------------------------
 * Single source of truth for ALL editable text and data on the site.
 * Want to change a headline, a phone number, or a FAQ answer? Do it here —
 * you never have to touch the components. Everything is typed, so your editor
 * will warn you if a required field is missing.
 */

export const site = {
  brand: "GreenBR",
  domain: "greenbr.net.br",
  tagline: "Conservation, carbon and climate in the Brazilian Cerrado",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "REDD+ Project", href: "#redd" },
  { label: "Impact", href: "#impact" },
  { label: "Partners", href: "#partners" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Member of the Brazilian Coalition",
  title: "Protecting the savanna that protects the climate.",
  body: "GreenBR develops high-integrity environmental projects in the Brazilian Cerrado — uniting forest conservation, carbon finance and lasting social impact. We turn standing forest into measurable climate value, and that value into a future for the people and species who depend on it.",
  primaryCta: { label: "Partner with us", href: "#contact" },
  secondaryCta: { label: "Explore the REDD+ project", href: "#redd" },
};

export const about = {
  eyebrow: "Who we are",
  title: "An environmental company built on science and stewardship.",
  paragraphs: [
    "GreenBR designs and implements integrated solutions for the strategic management of environmental projects, with a focus on mitigating climate change through technological tools and rigorous methodologies.",
    "Our multidisciplinary team brings together engineers, biologists, economists and georeferencing specialists. That breadth lets us move from satellite data to field reality — and from conservation goals to credible, verifiable results.",
    "Our mission goes beyond personal carbon offset: we work to preserve the Brazilian savanna and to help neutralize the impacts of a changing climate.",
  ],
  stats: [
    { value: "50,287", label: "hectares under conservation", unit: "ha" },
    { value: "2022", label: "listed on the VCS Program" },
    { value: "1", label: "single AFOLU REDD+ project" },
  ],
};

export const coalition = {
  eyebrow: "Institutional positioning",
  quote:
    "GreenBR is a member of the Brazilian Coalition, a movement of private-sector representatives committed to Brazil's leadership in a new low-carbon, competitive, responsible and inclusive economy.",
};

export const redd = {
  eyebrow: "Flagship project",
  title: "GreenBR Savanna Mirador REDD+ Project",
  intro:
    "A single AFOLU project on private properties in the Brazilian Cerrado, designed to keep forests standing and to reward the people who keep them that way.",
  video: {
    eyebrow: "Project film",
    heading: "See the Mirador territory — and the work behind its protection.",
    description:
      "A field-level view of the landscape, people and long-term stewardship that turn the GreenBR Savanna Mirador REDD+ Project from a climate commitment into work on the ground.",
    caption: "GreenBR Mirador Farms · Project documentary",
    title: "GreenBR Mirador Farms",
    playLabel: "Watch the project film",
    videoId: "gx31u4SvXpI",
  },
  timeline: [
    {
      date: "December 2022",
      title: "Listed on the VCS Program",
      body: "The project entered the Verra Verified Carbon Standard registry with the status of \u201Cunder development\u201D.",
    },
    {
      date: "November 2023",
      title: "Validation contract signed",
      body: "GreenBR signed with Bureau Veritas as the Validation/Verification Body (VVB), advancing the status to \u201Cunder registration\u201D.",
    },
  ],
  methodology: {
    title: "Methodology & scope",
    body: "The project integrates avoided unplanned deforestation (AUD) and avoided forested-land conversion with biodiversity preservation and the protection of water resources — a full REDD+ approach applied across 50,287 hectares of Amazonian-Cerrado transition.",
  },
  goals: {
    title: "What the project sets out to do",
    items: [
      "Create positive economic incentives for landowners to conserve savanna and forest.",
      "Maintain habitat for the tiger cat (Leopardus tigrinus), known locally as \u201Cpintadinho\u201D.",
      "Preserve the watersheds of the Alpercatas and Itapecuru rivers.",
      "Generate income for the territory through carbon-credit commercialization.",
    ],
  },
  activities: {
    title: "On-the-ground activities",
    items: [
      "Legal protection of forest areas",
      "Forest monitoring via satellite imagery",
      "Biomass inventory through permanent sampling parcels",
      "Property surveillance",
      "Wildfire monitoring, prevention and firefighting",
      "Protection of threatened species",
      "Social engagement with traditional communities inside the project area",
    ],
  },
  legalNote:
    "Under Brazil\u2019s Forest Code (Law 12.651), landowners in the Legal Amazon must conserve 80% of forest cover and 35% of Cerrado areas. The project rewards conservation that goes beyond these legal minimums, where land could otherwise be converted with environmental-agency approval.",
};

export const climateContext = {
  eyebrow: "Global climate reality",
  title: "Why adaptation matters.",
  intro:
    "Protecting the Cerrado is local work with global consequence. These perspectives from the UN Environment Programme place GreenBR’s conservation efforts within the wider adaptation challenge — where resilient landscapes, water systems and communities are essential climate infrastructure.",
  videos: [
    {
      source: "UN Environment Programme",
      title: "Underfinanced. Underprepared. #AdaptationGap",
      description:
        "A concise view of the widening gap between the scale of climate risk and the resources currently available to help communities adapt.",
      playLabel: "Watch UNEP perspective",
      videoId: "7iMlFxGXS_k",
    },
    {
      source: "UN Environment Programme",
      title:
        "Come hell or high water, the world must get serious about #climate #adaptation",
      description:
        "A direct call to treat adaptation as an urgent, practical priority — protecting people and ecosystems from impacts already underway.",
      playLabel: "Watch UNEP perspective",
      videoId: "1je_W0o2rcc",
    },
  ],
};

export const impact = {
  eyebrow: "Environmental & social impact",
  title: "Climate results that reach the people closest to the forest.",
  body: "In Mirador, Maranhão, traditional communities face poverty, scarce income and limited social mobility. Conservation only lasts when it works for the people who live alongside it — so GreenBR pairs forest protection with concrete development on the ground.",
  partnershipTitle: "Partnership with the Federal Institute of Maranhão (IFMA)",
  partnershipBody:
    "Together with IFMA, GreenBR supports food and nutritional security and the path toward economic independence for local families — including the implementation of basic food-production modules.",
  cards: [
    { value: "150", label: "families targeted by development actions" },
    { value: "IFMA", label: "academic & technical partnership" },
    { value: "Cerrado", label: "Amazonian-Cerrado transition biome" },
  ],
};

export const partners = {
  eyebrow: "Ecosystem & affiliations",
  title: "Working alongside the institutions that set the standard.",
  body: "Our work is anchored in recognized standards, technology and research partners.",
  logos: [
    { src: "/images/partner-verra.png", alt: "Verra", name: "Verra" },
    { src: "/images/partner-orbify.png", alt: "Orbify", name: "Orbify" },
    { src: "/images/partner-unb.png", alt: "University of Brasília (UnB)", name: "UnB" },
  ],
  coalitionNote: "Member of the Brazilian Coalition on Climate, Forests and Agriculture.",
};

export const faq = {
  eyebrow: "Your questions, our answers",
  title: "Frequently asked questions",
  items: [
    {
      q: "What is GreenBR\u2019s mission?",
      a: "GreenBR is about more than personal carbon offset. Our mission is to preserve the Brazilian savanna and help neutralize the impacts of climate change.",
    },
    {
      q: "Who is behind GreenBR?",
      a: "A multidisciplinary team of highly qualified professionals — engineers, biologists, economists and georeferencing specialists — focused on the development and implementation of integrated environmental solutions.",
    },
    {
      q: "What is the GreenBR Savanna Mirador REDD+ Project?",
      a: "A single AFOLU project covering 50,287 hectares of the Brazilian Cerrado. It combines avoided deforestation, biodiversity preservation and water-resource protection, and is listed on the Verra VCS Program.",
    },
    {
      q: "How does carbon finance support conservation?",
      a: "Carbon credits create a positive economic incentive for landowners and communities to keep forests standing, funding monitoring, fire prevention, species protection and local development.",
    },
  ],
};

export const contact = {
  eyebrow: "Getting in touch is easy",
  title: "Let\u2019s explore meaningful solutions together.",
  body: "Interested in collaborating, requesting a proposal, or learning how GreenBR can support your organization\u2019s sustainability goals? Send us a message or reach out directly — our team is ready to help.",
  details: {
    address: "SBS Q. 2 - Lote XV, Brasília - DF, 70070-120",
    email: "contato@greenbr.net.br",
    phones: ["+55 61 3044-1616", "+55 61 99674-0442"],
  },
};

export const footer = {
  blurb:
    "High-integrity environmental projects in the Brazilian Cerrado — conservation, carbon and community.",
  legal: `© ${new Date().getFullYear()} GreenBR. All rights reserved.`,
};
