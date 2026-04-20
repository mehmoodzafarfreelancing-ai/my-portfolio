export const siteConfig = {
  name: "Mehmood Zafar",
  title: "Mehmood Zafar — Fullstack Developer & SaaS Builder",
  description:
    "Fullstack web developer, freelancer, and SaaS builder focused on scalable products and high-end web solutions.",
  url: "https://mehmood-webworks.vercel.app",
  links: {
    github: "https://github.com/mehmoodzafarfreelancing-ai",
    linkedin: "https://www.linkedin.com/in/mehmood-zafar-402728393/",
    twitter: "https://x.com/codebymehmood",
  },
  email: "mehmood.webworks@gmail.com",
} as const;

export type SiteConfig = typeof siteConfig;
