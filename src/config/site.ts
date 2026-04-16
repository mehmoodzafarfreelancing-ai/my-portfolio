export const siteConfig = {
  name: "Mehmood Zafar",
  title: "Mehmood Zafar — Fullstack Developer & SaaS Builder",
  description:
    "Fullstack web developer, freelancer, and SaaS builder focused on scalable products and high-end web solutions.",
  url: "https://example.com",
  links: {
    github: "https://github.com/mehmoodzafar",
    linkedin: "https://www.linkedin.com/in/mehmoodzafar",
    twitter: "https://twitter.com/mehmoodzafar",
  },
  email: "mehmood.webworks@gmail.com",
} as const;

export type SiteConfig = typeof siteConfig;
