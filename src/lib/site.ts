export const site = {
  name: "TechSonix",
  legalName: "TechSonix, Inc.",
  url: "https://techsonix.com",
  updated: "September 16, 2026",
  // The existing public Web3Forms key routes to the site's existing recipient.
  // This is a form identifier, not a private API credential.
  formKey:
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
    "816116b1-66d1-4b5b-a1b2-8a1954e5790c",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};
export const services = [
  {
    slug: "blockchain",
    number: "01",
    name: "Blockchain engineering",
    short: "Connect applications to open networks.",
    description:
      "Wallet connections, smart contracts, and interfaces that make complex networks usable.",
    deliverables: [
      "Wallet and identity integrations",
      "Smart contract development",
      "Blockchain application interfaces",
      "RPC and network integrations",
    ],
    detail:
      "Bring blockchain capabilities into a product with clear transaction flows, explicit permissions, and interfaces people can understand.",
  },
  {
    slug: "web-development",
    number: "02",
    name: "Web development",
    short: "Build an experience worth opening.",
    description:
      "Responsive websites and web applications, from the first interaction to the infrastructure behind it.",
    deliverables: [
      "Responsive websites and applications",
      "Accessible interface development",
      "Product dashboards and portals",
      "Performance and deployment",
    ],
    detail:
      "Turn a product idea into a useful web experience. We connect design, application development, and deployment so the finished product works as a whole.",
  },
  {
    slug: "integrations",
    number: "03",
    name: "Systems & integrations",
    short: "Make all the pieces work together.",
    description:
      "APIs, backend services, and the connections that turn individual tools into a working system.",
    deliverables: [
      "API design and implementation",
      "Third-party service integrations",
      "Backend services and data flows",
      "Deployment and developer tooling",
    ],
    detail:
      "Connect the services your product depends on. We build the interfaces between systems with attention to reliable behavior and maintainable code.",
  },
];
